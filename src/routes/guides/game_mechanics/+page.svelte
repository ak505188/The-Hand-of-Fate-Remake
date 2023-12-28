<script>
  import Container from '$lib/components/container.svelte';
  import Sqrt from '$lib/components/Sqrt.svelte';
</script>

<Container>
  <h2>Exit Fate: Johnny's Blackjack Table</h2>
  <hr class="border">
  <p>
    Calculator for the hit rate, damage, and character stat formulas are available here.
  </p>
  <p>
    <a href="https://docs.google.com/spreadsheets/d/1Ojn3h9dvEAfbGARUftTJFF5cBLwdkf07FPbqaxNB5Ko/edit?usp=sharing">https://docs.google.com/spreadsheets/d/1Ojn3h9dvEAfbGARUftTJFF5cBLwdkf07FPbqaxNB5Ko/edit?usp=sharing</a>
  </p>
  <p>
    (Green cells are the inputs to the formulas, and is editable by anyone online. For offline use, download the spreadsheet by selecting “File” and “Download” on the Google Sheets tabs.)
  </p>

  <h3>Hit and Critical Rate</h3>
  <p>
    Hit rate percentage (attacker's ACC vs target's DEX):
  </p>
  <math>
    350 * <Sqrt>ACC</Sqrt> / <Sqrt>DEX</Sqrt> - 255
  </math>
  <p>
    Critical hit rate percentage (attacker’s SKL vs target’s DEX):
  </p>
  <math>60 * <Sqrt>SKL</Sqrt> / <Sqrt>DEX</Sqrt> - 45</math>
  <p>
    Example: When all stats are the same, the base hit rate is 95% and the base crit rate is 15%
  </p>
  <p>
    Note: Blind status causes 50% ACC penalty. Berserk status causes 25% ACC penalty.
  </p>

  <h3>Physical Damage</h3>
  <math>( (2 * x * c * STR) - PDF) * q * e * d * b * r</math>
  <ul>
    <li>c is the crit factor (1.25 with crit, 1 without)</li>
    <li>x is a multiplier used for some skills. It's 1 for regular attacks, and for example 0.8 for Row Strike.</li>
    <li>q is another skill multplier, which is only used for a couple of enemy attacks</li>
    <li>e is the elemental multiplier (0.85 for same element, 1.3 for opposing elements, 1 otherwise)</li>
    <li>d is 0.5 if the target is defending</li>
    <li>b is 0.5 if the target is affected by the Barrier status effect</li>
    <li>r is a random factor between 0.85 and 1.15</li>
    <li>50% further damage reduction will be applied with an elemental shield status</li>
  </ul>

  <p>
    The STR and PDF values are also affected by some additional multipliers
  </p>
  <ul>
    <li>STR is multiplied by 0.9 if the attacker is in the back row, and 0.95 for the middle row</li>
    <li>PDF is multiplied by 1.1 if the target is in the back row, and 1.05 for the middle row</li>
    <li>STR is multiplied by 0.75 if the attacker has the Enfeeble status</li>
    <li>Both STR and PDF are affected by relation effects (as shown on the Relations guide)</li>
  </ul>

  <h3>Magical Damage</h3>
  <math>
    (2  (0.5 * MAG * f + 0.5 * m)  - MDF) * q * e * d * s * r
  </math>
  <ul>
    <li>f is 1 for regular spells and -1 for healing (since healing is negative damage)</li>
    <li>m is the user's base magic stat is multplied by the spell's power. </li>
    <ul>
      <li>Spell’s power are as follows:</li>
      <ul>
        <li>35 for level 1 spells </li>
        <li>120 for level 2 spells </li>
        <li>300 for level 3 spells</li>
        <li>200 for Spectral Prism</li>
      </ul>
      <li>Example: Francesca (110 base MAG) casting Dark Matter will have an m value of 330.</li>
      <li>Basically, half the damage of a spell is fixed based on the spell and the user's base stats, and the other half is based on their current MAG.</li>
    </ul>
    <li>s is 0.5 if the target is affected by the shield status effect</li>
    <li>e / d / r multipliers are the same as for physical damage</li>
    <li>50% further damage reduction will be applied with an elemental shield status</li>
  </ul>

  <h4>Base Magic Damage (q)</h4>
  <p>
    Light, Ice & Water spells have q values of 1. Fire have q value of 0.8, and Lightning have q value of 0.9.<br>
    (So fire spells will always do 80% of the damage that most other spells do.)
  </p>
  <p>
    Spells with the 'spread' target type (dark magic) are special, and the actual damage is reduced by 6 percentage points for each target beyond the first.<br>
    Example: If it hits 5 targets, the total damage is 100%-(4*6%)=76% of the normal damage.
  </p>

  <h4>Healing Formula</h4>
  <p>
    Healing spells uses the same formula as magical damage, but with an f multiplier of -1 (negative damage).<br>
      It also ignores the multipliers for elemental affinity, shield status and defending.
  </p>
  <p>
    For Mend & Mend-All spells, the user’s MAG stat have a limit. And if MAG is higher than this limit, the value is 'limit + (MAG - limit) / 3' instead. This stops the cheap healing spells from scaling too high.
  </p>

  <ul>
    Base spell power of the healing spells are as follows:
    <li>Mend: 50</li>
    <li>Cure: 150</li>
    <li>Heal: 350</li>
    <li>Mend-All: 12</li>
    <li>Cure-All: 80</li>
    <li>Heal-All: 180</li>
    <li>Restore: 5</li>
    <li>Holy Grail: 120</li>
  </ul>

  <h3>Character Stats</h3>
  <p>
    The actual stats are calculated based on the level and their base stat. Refer to the Character Stats guide for each of their base stats.
    <br>
    100 is the baseline, and if a character has for example 120 base STR then they should have 20% higher STR than average at all levels.
  </p>

  <p>For all stats, the level multiplier is as follows:</p>
  <math>L = 3 * (1.035^(Level + 5))</math>

  <ul>
    The L multiplier is applied differently for the calculations of each stats:
    <li>HP =  (base * L * 2) / 10</li>
    <li>MP+ = (base * (L + 5) * 7.5) / 1000</li>
    <li>STR / PDF / ACC / SKL = (base * L / 4) / 10</li>
    <li>MAG / MDF / SPD / DEX = (base * L / 2) / 10</li>
    Where 'base' is the base stat for each characters.
  </ul>
  <p>
    STR / PDF / ACC / SKL are halved to compensate for additional bonus from weapon upgrades or armor equipment.
  </p>

  <ul>
    The bonuses from weapon upgrades are based on the same formulas, with each upgrade level (from level 0-15) corresponding to a character level in the following list:
    <li>
      1, 4, 7, 11, 15, 20, 25, 30, 36, 42, 47, 54, 61, 69, 78, 85
    </li>
    Example: If you upgrade weapon attack to level 3 for a character, the attack bonus they get should be the same as their level 11 base strength.
  </ul>

  <h3>Experience</h3>
  <p>
    First of all, the experience/level gain is calculated separately for each enemy. The basic formula to calculate exp is:
  </p>
  <math>EXP =  1000 * (3^x / 2^x) / 20</math>
  <p>
    Where x is the difference between the enemy's level and the character's level.
  </p>
  <p>
    1000 is the exp needed per level, and 20 is the number of enemies you have to defeat if the enemy is the same level. If the amount of exp is large enough to gain a level, then the character gains a level and the formula is applied again on the remainder of the exp.
  </p>
  <p>
    So if a character currently has 600 exp and they would be earning 1600 exp, then they would gain one level off of the first 400, and then the amount of exp is recalculated based on their new level and they would gain 75% of that amount, since the first 25% (400) of the exp was used up. This can repeat multiple times if the character gains a lot of levels.
  </p>
</Container>

<style>
  li {
    margin: .5rem 0;
  }

  h4 {
    margin-bottom: 0;
  }
</style>
