<script>
  import Container from '$lib/components/container.svelte';
</script>

<Container>
  <h2>Exit Fate: About the Game</h2>
  <p>
    <b>Exit Fate</b> is a role-playing game made using the <b>RPG Maker XP</b> software. Created by <a href="http://site.scfworks.com/?page_id=31">SCF</a>, the general style of the game is primarily modeled after <a href="https://en.wikipedia.org/wiki/Suikoden_II"><b>Suikoden II</b></a>, a famous RPG title from Konami. (This is most noticeable in the sprite graphics.) <b>Exit Fate</b> is inspired by several other popular RPG titles, as well, which can be seen in the soundtrack (composed of various tracks borrowed from other games), as well as a handful of borrowed concepts and references. However, it is not directly linked to any of these games, and contains plenty of its own original material. Below are some details, to further give an idea of what to expect from this game.
  </p>
  <center>
    <img src="/images/about/ef1.jpg" alt="">
    <aside>
      As seen above, <b>Suikoden II</b>'s sprite sets provide lovely 2-D<br>graphics, plus original character portraits provided by SCF.
    </aside>
  </center>
  <h3>Gameplay</h3>
  <p>
    If you're familiar with JRPG's, then you should know what to expect. Even better, if you're familiar with the <b>Suikoden</b> games, then you should definitely know what to expect. You've got your typical JRPG setup, with turn-based battles and all, plus some of the kinds of things you'll find in the <b>Suikoden</b> titles: A six-member party and several characters to recruit (a total of 75), a turn-based strategic battle system in addition to the usual battles, and a castle and army of your own to build up.
  </p>
  <center>
    <img src="/images/about/ef2.jpg" alt="">
    <aside>
      Six-member battle groups with three rows available for strategic<br>placement, plus two "entourage" positions for mid-battle<br>character replacements.
    </aside>
  </center>
  <h3>Battles & Party Formation</h3>
  <p>
    To start, battles are mostly based on random encounters. Although there is no 'Run Away' option, before entering a battle, there will be an opportunity to 'Bribe' the enemy, avoiding the encounter. When your party is about to enter a battle, a large '!' will appear at the top of the screen, along with a bribe value (25% of what the battle would reward you with), but only for a moment, so you must decide quickly. If you wish to skip the battle, just press the 'Cancel' button. However, if you do not have the required amount of money to bribe the enemy, the battle will begin immediately.
  </p>
  <p>
    Turn-based battles are pretty similar to those of <b>Suikoden</b>. You've got a six-man party, plus two swap-in character positions. For battle purposes, you've got three rows (each with three slots) to form your party in: Front Row (normal stats), Middle Row (-STR, +PDF), and Back Row (--STR, ++PDF). Only short-range characters will be affected by the stat changes, however. On that note, one notable difference from <b>Suikoden</b> is that all characters are either short-range or long-range (marked with an 'L' in their status screen) -- there is no M-range.
  </p>
  <p>
    Your battle menu is as follows: Attack, Magic, Special, Defend, Use Item, Equip, Move, Switch. Most of these should be self-explanatory. 'Attack' is, but it should be pointed out that physical attacks include characters' elemental properties. (More on that below.) 'Special' is only available to certain characters with special skills. (Wild Attack, Scan, Steal, Focus, etc.) Only a select handful of characters have these skills, however. 'Move' is the command used to re-position a character in the front, middle, or back row. 'Switch' is the command to swap characters in your party with entourage members. All commands will use one turn, keep in mind. (Even Equip, Move, and Switch.)
  </p>
  <p>
    <b>Suikoden</b> fans may be thinking, "Aw, no unite attacks?" Yes, unfortunately, <b>Exit Fate</b> does not feature unite attacks. However, in their place, there is a 'Relation' system, giving each character three characters who will affect their stats if used in battle at the same time. There are four possible relation effect ranks: A (major stat increase), B (small stat increase), C (minor stat increase), and F (small stat penalty). If someone who a character has a relation to is KO'd in battle, an exclamation point will appear above their head. Until the battle ends or the fallen character is revived, the affected character's stat boost will double. (In the case of an F-rank relation, the penalty will change to a major stat boost.)
  </p>
  <p>
    'Magic' gets its own paragraph, since things vary a bit here. Any character can cast any spell, but the effect and MP cost will vary based on stats and elemental affinities. Spells can be obtained from battle (awards, stealing), chests, and even from shops. Magic is stocked like an item, yet differently, in the sense that it doesn't go into your normal inventory, so it can't be sold. The quantity of a spell you own determines how many times that spell may be cast per battle, so even if you have the appropriate amount of MP, if you've used it all up, it's gone until the next battle. On the note of MP: Each character has an 'MP+' statistic, which determines the rate at which they regenerate MP in battle. At the start of battle, each character will begin with the base value of their MP+ stat. With each turn that passes, they will gain said amount of MP. The MP cost of spells depends on the type (attack, healing, buff, etc.) as well as the elemental property of the character using them. If th#a2b9d3e element does not match that of the character using it, the MP cost will be 20% higher than the normal value.
  </p>
  <p>As for elemental properties, elements dominate each other in pairs:</p>
  <ul>
    <li><span style="color:var(--element-light)">Light</span> &#9472;&#9658; <span style="color:var(--element-dark)">Dark</span></li>
    <li><span style="color:var(--element-fire)">Fire</span> &#9668;&#9472;&#9658; <span style="color:var(--element-ice)">Ice</span></li>
    <li><span style="color:var(--element-water)">Water</span> &#9668;&#9472;&#9658; <span style="color:var(--element-lightning)">Lightning</span></li>
  </ul>
  <p>
    In wording, each element has an offensive advantage against its opposite, but a defensive disadvantage in turn. On the other hand, an element aimed at a target of the same element will do slightly less than normal damage.
  </p>
  <h3>Strategic Campaigns</h3>
  <center>
    <img src="/images/about/ef3.jpg" alt="">
    <aside>
      Look familiar, <b>Suikoden II</b> fans?
    </aside>
  </center>
  <p>
    To those familiar with <b>Suikoden II</b>'s strategic war campaigns, not much should be new here. In any case:<br>
      For each of these battles, you'll have a certain number of units to command (depending on who you've got recruited at the time), each consisting of a predetermined commanding officer (base stats) and three additional characters (bonus stats/abilities). First, let's cover the stats for these units: 'Men' is your unit's health/hit points, 'ATK' is your attack power, and 'DEF' is your unit's defensive power. Each unit has base values for these stats, and certain additional characters may give bonuses/penalties to ATK and/or DEF. (All additional characters add some amount to Men.) Additional characters may also provide a special skill to their unit. (For example, Evasion: 20% chance to avoid damage when attacked.)
  </p>
  <p>Now, onto the unit types</p>
  <ul>
    <li>Infantry: Basic, short-range foot soldiers. ATK+, DEF+. Movement range: 2 tiles.</li>
    <li>Cavalry: &nbsp;Short-range unit with increased mobility on open plains. Movement range: 4 tiles. (1 tile in forests & mountains.)</li>
    <li>Scout: &nbsp;&nbsp;&nbsp;Long-range archer unit. Movement range: 3 tiles. (1 tile in mountains.)</li>
    <li>Sorcery: &nbsp;Long-range magic unit. ATK-, cannot counter. Movement range: 2 tiles. (1 tile in forests & mountains.)</li>
  </ul>
  <p>
    Each unit commander will have varying ranks in each of these specialties, which may give additional stat bonuses or penalties.
  </p>
  <h3>For Further Details...</h3>
  <p>
    More details on the gameplay can be found in the in-game help menu, for further explanation of things mentioned here, as well as some additional information that isn't.
  </p>
</Container>
