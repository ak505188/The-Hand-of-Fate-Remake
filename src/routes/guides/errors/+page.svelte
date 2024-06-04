<script>
  import Container from '$lib/components/container.svelte';
</script>

<Container>
  <h2>Exit Fate: Bugs/Glitches and Mishaps</h2>
  <hr class="border">
  <h3>Combat Glitches</h3>
  <h4>+HP Equipment Removal</h4>
  <p>
    Equipment that grants additional HP will leave the bonus effect intact temporarily after the equipment is removed. However, this will only last until the character takes damage reducing their current HP to their lower maximum HP value or below, until the character is healed (whether they need it or not), or until the end of the first battle after removing the equipment.
  </p>
  <img src="/images/guides/errors/hp_equipment.png" alt=""/>
  <aside>
    (Reported by <a href="//www.tapatalk.com/groups/elysium_castle/memberlist.php?mode=viewprofile&u=36">Leonius</a>)
  </aside>
  <h4>Long-Range Attack Damage Penalty</h4>
  <p>
    Long-range attackers is meant to be able to attack from any position in your party without an ATK penalty.. However, there’s an error in the damage output of long-range attackers, causing them to deal less damage from the middle and back rows, like anyone else would.
  </p>
  <aside>
    (Reported by <a href="//www.tapatalk.com/groups/elysium_castle/memberlist.php?mode=viewprofile&u=25">topaz</a>)
  </aside>
  <h4>Level 99! ... Briefly</h4>
  <p>
    Details are unclear on what causes this to happen, but you may occasionally notice a character leveling up far beyond the others in your party in the results screen after a battle -- to level 99 (and "beyond"), actually. However, this is only a visual bug, and the character will return to their proper level once you progress beyond the results screen.
  </p>
  <aside>
    (Reported by <a href="//www.tapatalk.com/groups/elysium_castle/memberlist.php?mode=viewprofile&u=71">slicktrick420</a>)
  </aside>
  <h4>Elemental Shield Ineffective vs Physical Abilities</h4>
  <p>
    Abilities such as Fireshield or Lightshield are supposed to reduce any damage of the corresponding element by 50%. However, this effect doesn’t work against enemies who use special named physical abilities (such as Caina or Ptolomea from the final Shadow Boss), and you will still receive full 100% damage. Magical abilities, or regular non-named physical attacks, will still get its damage reduced by the elemental shields as intended.
  </p>
  <h4>Duplicate Characters</h4>
  <p>
    When the story requires you to put specific characters, they can get duplicated if you already have these characters on the Entourage. On combat, these duplicated characters will share the same stats, while being able to move twice as much! However, they will also take double damage from area attacks.
    <a href="//www.youtube.com/watch?v=iWake3peXnI">https://www.youtube.com/watch?v=iWake3peXnI</a>
  </p>
  <p>This exploit is only possible for specific story moments:
  <ul>
    <li>
      Chapter 6: Before the Boris fight, when Deus joined your party.
    </li>
    <li>
      Chapter 6: Before the Clint fight, when Jovian and Angel joined your party.
    </li>
    <li>
      Chapter 7: Before going to Jinen Gama, when Bast joined your party.
    </li>
  </ul>
  <h4>Enemy Abilities with Wrong Elements</h4>
  <p>
    Some enemy abilities are wrongly assigned with a different element instead of the enemy’s own element.
  </p>
  <ul>
    <li>Basilisk: Fire Breath is Ice instead of Fire</li>
    <li>The Mad King: Black Wind is Fire instead of Dark</li>
    <li>Ghost Magus: Good Night is Dark instead of Water</li>
    <li>Kama: Stunning Mirage is Fire instead of Light</li>
    <li>Demon Trevor / Mephisto: Tachyon Beam and Annihilation Ray are Light instead of Dark</li>
    <li>Demond Sick / Mephisto: All Creation is Fire instead of Light</li>
    <li>Poltergeist: Brain Freeze is Fire instead of Light</li>
    <li>Gudrun: Asgard Winter is Fire instead of Ice</li>
    <li>Red Dracoknight: Ares' Wrath is Light instead of Fire</li>
    <li>Shadow Tarlia: Polar Meltdown and Absolute Zero are Thunder instead of Ice</li>
  </ul>
  <h4>Silence Effect is Cured after Receiving Physical Damage</h4>
  <p>
    A common trope in JRPGs is how the Sleep effect will get cured after the character takes physical damage. This behaviour is wrongly assigned to the Silence effect as well, allowing you to cure a silence effect without using Voice Box or the Noise spell.
  </p>
  <h4>Self-attack Softlock from Chaos Status</h4>
  <p>
    Character with Chaos status ailment can attack any friendly character, including themself. Attacking themself might cause their sprite to get stuck and infinitely moving downwards, softlocking the game. The chance of this occuring is low, and it’s unclear on why this happened.
    <a href="//clips.twitch.tv/ArborealGrossFlamingoDxCat">https://clips.twitch.tv/ArborealGrossFlamingoDxCat</a>
  </p>

  <h3 id="War_Battle_Glitches">War Battle Glitches</h3>
  <h4>Infinite Movement Glitch</h4>
  <p>
    When you’re attempting to move a unit, and press the Confirm and Cancel keys/buttons simultaneously (this may take multiple attempts), that unit will move to the specified location without using up their turn, allowing them to take another action! This can be repeated as many times as needed, until that unit takes an action that ends its turn.
  </p>
  <aside>
    (Reported by <a href="//www.tapatalk.com/groups/elysium_castle/memberlist.php?mode=viewprofile&u=32">Angwa</a>)
  </aside>

  <h4>Sorcery War Units ATK "Penalty"</h4>
  <p>
    In the war unit setup menu, sorcery units are meant to receive a -1 ATK deduction in exchange for their attack range. However, once you enter battle, the sorcery units will instead have a +1 ATK bonus.
  </p>

  <h4>Damage-Tweak Abilities Causes Opposite Effects</h4>
  <p>
    Abilities such as Light Feet or Blockade are supposed to increase the defense. However, the game code actually reduces this defense. This also applies similarly for abilities that increases attacks such as Berserker.
  </p>
  <p>
    Here are the actual effects of the following abilities, opposite of what the game texts are saying:
  </p>
  <ul>
    <li>Light Feet, Blockade, Scatter and Forcefield effectively reduce defense by 2 against that particular unit type instead of increasing it</li>
    <li>Counter makes you do less damage on counter-attacks</li>
    <li>Shield makes you take more damage on counter-attacks</li>
    <li>Berserker makes you do less damage with normal attacks, and take less damage from counters</li>
  </ul>

  <h3>Other Errors</h3>
  <h4>Rorschach's Sister</h4>
  <p>
    The first time you encounter Rorschach, he refers to his sister as "Rosa," but later refers to this same sister as "Anna." This is a simple mishap on SCF's part. Rorschach's sister was originally named Rosa, but had her name changed to Anna later in the developmental stages of the game. However, SCF missed the first reference, leaving two different names for the same character in the script.
  </p>

  <h4>Walk Through Fading Dream Puzzle Walls</h4>
  <p>
    In each of the puzzle block, the bottom part of the vertical wall can be walked through, making it easier to complete the puzzle and grabbing the chest. If you tried to return to the puzzle room, the bug is fixed somehow.
    <a href="//www.youtube.com/watch?v=aUxENEmKEgM">https://www.youtube.com/watch?v=aUxENEmKEgM</a>
  </p>

  <h4>Greyscale Character Portraits</h4>
  <p>
    During the character epilogues, the unrecruited characters will have their portrait shown in greyscale. If you reload/replay within the same game session (i.e. without closing the game), the previously unrecruited characters will remain in greyscale.
  </p>
  <img src="/images/guides/errors/greyscale.png" alt="">

  <h4>Unrecruited Stromgaard in Castle</h4>
  <p>
    On chapter 7 onwards, if Stromgaard is still unrecruited, he will still show up in your castle. And you can talk to him as normal. However, you still need to recruit him in Credence to actually use him in combat.
  </p>

  <h4>Tiffany’s Bronze Ring as a Footwear</h4>
  <p>
    Tiffany is meant to have the Bronze Ring accessory on her initial inventory. But somehow this item was assigned as a foot equipment instead. If you unequip this, you can’t re-equip the Bronze Ring on her foot anymore.
  </p>
</Container>

<style>
  img {
    max-width: calc(100% - 2rem);
  }

  li:not(:last-child) {
    margin-bottom: .5rem;
  }

  h4 {
    margin-bottom: 0;
  }
</style>
