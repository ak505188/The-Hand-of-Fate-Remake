<script>
  import ImageModal from '$lib/components/ImageModal.svelte';
  import Image from './Image.svelte';
  import Container from '$lib/components/container.svelte';

  let src;
  let showModal = false;

  function openModal(new_src) {
    src = new_src;
    showModal = true;
  }
</script>

<ImageModal bind:showModal={showModal} bind:src={src}/>
<Container>
  <h2>Exit Fate: Secrets</h2>
  <hr class="border">
  <p>
    Some gamers may be fine with simply playing a game's story, but some have other things in mind. Exit Fate already provides you with several optional characters you may recruit, but it offers more than just that. Here are the (currently known) secrets this game has to offer.
  </p>

  <h3 class="spoiler-alert">Spoiler Alert!</h3>

  <ul>
    <li>
      <h4>Free Leftover</h4>
      <p>
        If you speak to the girl in the Bayside Town magic shop, she will complain about problems with the store's stock and give you a free Muscleheal spell!
      </p>
    </li>

    <li>
      <h4>Stromgaard's Enlistment</h4>
      <p>
        If you recruit Stromgaard when you first get the chance to in Alfheim, before leaving Bayside Town with Ljusalf, he'll appear and provide additional dialogue later in Blackwater, when Daniel decides to join the Matrech State Army.
      </p>
      <aside>Reported by Leonius.</aside>
      <center>
        <Image base="/images/secrets/blackwater-stromgaard-01" open={openModal}/>
        <Image base="/images/secrets/blackwater-stromgaard-02" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>Troublemakers at Deke's Mansion</h4>
      <p>
        Bring Col and/or Joe with you when recruiting Deke. Both characters will add extra dialogue when you initially speak to Deke.
      </p>
      <center>
        <Image base="/images/secrets/dekerec-01-joe" open={openModal}/>
        <Image base="/images/secrets/dekerec-02-col" open={openModal}/>
        <Image base="/images/secrets/dekerec-03-joe" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>"Exploring" the Mad King's Vault</h4>
      <p>
        Bring Stromgaard with you when recruiting Mandala, and speak to her to trigger extra dialogue between her and Stromgaard.
      </p>
    </li>

    <li>
      <h4>The Enigmatic Robed Man</h4>
      <p>
        After recruiting Nashal, speak to her in her room (western end of Elysium Castle, 3rd floor). She will ask about Yan Angwa. After speaking with her, speak to Yan Angwa in his room (northeast 2nd floor) to learn (a little) more about him.
      </p>
      <center>
        <Image base="/images/secrets/mandalarec-01-stromgaard" open={openModal}/>
        <Image base="/images/secrets/mandalarec-02-mandala" open={openModal}/>
        <Image base="/images/secrets/mandalarec-03-stromgaard" open={openModal}/>
        <Image base="/images/secrets/mandalarec-04-mandala" open={openModal}/>
        <Image base="/images/secrets/mandalarec-05-mandala" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>Proof of Avalon</h4>
      <p>
        After obtaining the Holy Grail from Nomad's recruitment quest, show it to the man in Harlinton's inn who speaks of Avalon. In return, he will give you a Regen spell!
      </p>
    </li>

    <li>
      <h4>Shady Shenanigans, Part 1: Reod</h4>
      <p>
        The recruitment of Reod requires one of three characters to be present in your party: Joe, Rorschach, or Marcello. All three have their own dialogue, with Marcello's being the most unique:
      </p>
      <center>
        <Image base="/images/secrets/reodrec-a01-joe" open={openModal}/>
        <Image base="/images/secrets/reodrec-a02-joe" open={openModal}/>
        <Image base="/images/secrets/reodrec-b01-rorschach" open={openModal}/>
        <Image base="/images/secrets/reodrec-b02-rorschach" open={openModal}/>
        <Image base="/images/secrets/reodrec-c01-marcello" open={openModal}/>
        <Image base="/images/secrets/reodrec-c02-reod" open={openModal}/>
        <Image base="/images/secrets/reodrec-c03-marcello" open={openModal}/>
        <Image base="/images/secrets/reodrec-c04-marcello" open={openModal}/>
        <Image base="/images/secrets/reodrec-c05-marcello" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>Shady Shenanigans, Part 2: Marcello</h4>
      <p>
        The recruitment of Marcello requires one of three characters to be present in your party, to pick the lock on a door: Joe, Rorschach, or Reod. Each has their own comment on the situation, shown below:
      </p>
      <center>
        <Image base="/images/secrets/marcrec-a01-joe" open={openModal}/>
        <Image base="/images/secrets/marcrec-b01-rorschach" open={openModal}/>
        <Image base="/images/secrets/marcrec-c01-reod" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>A D-d-dragon!</h4>
      <p>
        If Orlando is present in your party upon confronting Tiamat (to recruit Avelion), he will add some brief "colorful commentary."
      </p>
      <center>
        <Image base="/images/secrets/avelrec-01-orlando" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>Seeking Forgiveness</h4>
      <p>
        After the Battle at Midgard Plains, take Deus back to Cento Temple and speak with Galius in his room. The two will discuss Deus' past, present, and future, after which Galius will give Deus a Topaz Amulet.
      </p>
    </li>

    <li>
      <h4>Thanks and a Request</h4>
      <p>
        Following the Battle at Vanaheim, some characters around at your castle will have dialogue changes. Two characters of note are Stromgaard and Griever. Stromgaard will thank you for carrying out some sort of "revenge for [his] people," and Griever will request that you bring her with you to storm Vanaheim, so that she may bury a "piece of [her] past." Whatever could these two be referring to? (Hint: See 'A Lost Friend of Past Days' below.)
      </p>
      <center>
        <Image base="/images/secrets/postvanaheim-stromgaard" open={openModal}/>
        <Image base="/images/secrets/postvanaheim-griever" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>A Traitor's Demise</h4>
      <p>
        Upon defeating Leonius at Vanaheim, some characters will add extra dialogue if they are present in your party at the time. These characters are: Bruce, Eander, Jovian, Keyser, and Rorschach.
      </p>
      <center>
        <Image base="/images/secrets/leondef-01-eander" open={openModal}/>
        <Image base="/images/secrets/leondef-02-keyser" open={openModal}/>
        <Image base="/images/secrets/leondef-03-jovian" open={openModal}/>
        <Image base="/images/secrets/leondef-04-rorschach" open={openModal}/>
        <Image base="/images/secrets/leondef-05-bruce" open={openModal}/>
        <Image base="/images/secrets/leondef-06-bruce" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>From One Almengan to Another</h4>
      <p>
        If Tarlia is present in your party when you defeat Gudrun at Vanaheim, she will appear on-screen and apologize to Gudrun for the way things turned out. (Note: Tarlia's dialogue will not overlap with the 'A Lost Friend of Past Days' scene below. If she, too, is present in the party, then she will appear on-screen, but not say anything.)
      </p>
      <center>
        <Image base="/images/secrets/gudrundef-01-tarlia" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>A Lost Friend of Past Days</h4>
      <p>
        If you have recruited Griever and you speak to her at Elysium Castle's boat dock after the Battle at Vanaheim, she will request to be taken to Vanaheim. If she is present in your party when you defeat Gudrun at Vanaheim, the two will exchange dialogue and a flashback cutscene will be triggered, revealing the truth of Griever's identity. Later, even if Griever was not present at this battle, she will comment on Gudrun's death if you speak to her at Elysium Castle.
      </p>
    </li>

    <li>
      <h4>Odin's Ravens</h4>
      <p>
        In the Spiritual Plane, accessed from the North Almenga Border, is a hidden path leading to an optional boss fight: Hugin and Munin. Although this battle is accessible when you enter the Spiritual Plane for the first time, it is strongly recommended that you wait until the end of the game before attempting it, as the enemies are both level 90. If you are prepared, however, enter the Spiritual Plane and head south. On the next screen, take the path on the right and work your way north. Next, go down, left, up, and examine the next crystal. Make your way around the loop and warp to the next area. This is where the hidden path is. On
        <a
          href="/images/secrets/to-huginmunin.jpg"
          on:click={(e) => {
            e.preventDefault()
            openModal("/images/secrets/to-huginmunin.jpg")
          }}
        >this screen</a>, you'll see a pillar near a save crystal. (Using this now would be wise.) From the pillar leftward, you can walk further up, and then left, to reach a warp crystal. On the following screen, simply head downward. Daniel will warn you, but keep moving and you'll trigger the battle at the end of the path.
      </p>
      <center>
        <Image base="/images/secrets/huginmunin" open={openModal}/>
      </center>
    </li>

    <li>
      <h4>Engulfed By a Massive Darkness</h4>
      <p>
        Enter the basement of Elysium Castle and head toward the back of the dungeon. You will find a treasure chest, which can only be opened once you have recruited all 75 characters. Once you have done so, open the chest to trigger a rather ominous message: "You shiver as you feel a sudden cold chill. Traces of memories flash through your mind, some of which you don't recognize. The room you grew up in appears clearly before you, before being engulfed by a massive darkness." You will then receive Battle Plan #23: Fated Battle, as well as unlock the first of six optional bosses. These foes will truly test the strength of your party (as will the random encounters around them), so be sure to enter battle well prepared. Each boss will show you a special scene as well as provide a hint to the next boss' whereabouts. Below is a list of the enemies and their locations.
      </p>
      <ol>
        <li>Shadow Daniel: Levier orphanage, east 2nd floor.</li>
        <li>Shadow Erin: Erin's office in Matrech State Capital.</li>
        <li>Shadow Eander: Meeting hall in the castle of St. Reinard.</li>
        <li>Shadow Tarlia: Muspelheim inn, basement room.</li>
        <li>Shadow Ljusalf: Alfheim inn, 2nd floor.</li>
        <li>Shadow Yan Angwa: West Nifl Woods.</li>
      </ol>
    </li>

    <li>
      <h4>Ending Teaser: The Twin Signs</h4>
      <p>
         While hearing about what becomes of our heroes after the events of Exit Fate is enjoyable in itself, for those of you who made the effort to gather all 75 characters, SCF provided an extra "something" after the ending credits: a teaser hinting at a potential sequel to Exit Fate! And a tease it is indeed, giving a few vague lines of text for Exit Fate fans to speculate over until their brains hurt too much to continue. The one thing that stands out most in this text, however, is the final line, "Only the Brotherhood can save you." If you recall, our friend Frore used to be a part of this "Brotherhood." The intrigue is real. Let's see if SCF follows through one day...
      </p>
        <aside>
          Confirmed by srd_27: Simply recruiting all 75 characters will trigger this scene upon completion. No additional steps are needed.
        </aside>
        <center>
          <Image base="/images/secrets/teaser1" open={openModal}/>
          <Image base="/images/secrets/teaser2" open={openModal}/>
        </center>
    </li>
  </ul>
</Container>

<style>
  ul > li {
    list-style: none;
  }

  ol {
    padding-left: 0;
  }
</style>
