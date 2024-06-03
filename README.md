## About
This is a remake of the now down The Hand of Fate website. It's a website dedicated to providing information & guides for the game Exit Fate created by SCF. You can view the old website [here](https://web.archive.org/web/20170802024940/http://exitfate.webs.com/index.htm)

### Instructions
[Doc](https://docs.google.com/document/d/1eDxnn6AaU0mFWePfqdkS4Z7PFHT39Wv5yrANILTcMKQ/edit)

### Progress Checklist
- [ ] Pages
  - [x] Index
  - [x] About
  - [x] Download
  - [ ] Guides
    - [x] Recruitment Guide
      - [ ] Improve formatting
    - [x] About Exit Fate
      - [ ] For font section, use that font on site?
    - [x] Character Guides
      - [x] Character Stats List & Rankings
        - [Doc Link](https://docs.google.com/spreadsheets/d/10S3wSmxsoxyIEIabitGac4cjVPrQN4rho-GuIPZu470/edit?usp=sharing)
      - [x] Initial Equipment List
        - [Doc Link](https://docs.google.com/spreadsheets/d/1-iiSSKP0zHPA5MxRidliDYlkCLEJRHC2cpt4vFfzJw8/edit?usp=sharing)
      - [x] Character Relation
        - [x] Import Original
        - [x] Combine Original and Doc
        - [x] [Doc Link](https://docs.google.com/spreadsheets/d/1jN2dahf9XiaYF9W0wR5Cs0TOweGkJQ14GioAbzzZZwo/edit?usp=sharing)
      - [x] Special Skills
        - [x] Add note on Wild Attack section: "Tip: Use Lock status on them so they will not get stunned."
      - [x] Weapon Levels Guide
      - [x] War Unit Guide
        - (the guide mentioned “-1 ATK” for Sorcery unit, but it’s actually “+1 ATK”, the game incorrectly shows -1 during the unit formation setup page)
        - (might want to also mention about the bug on damage effect abilities, similarly to what’s shown on the glitches guide?)
    - [x] Enemy Guides
      - [x] Enemy Stats
        - [Doc Link](https://docs.google.com/spreadsheets/d/1jqfsGbik-WP9kBdr57AOiN6HAvRigJ1W94Apezeppvg/edit?usp=sharing)
      - [x] Encounters List
        - [Doc Link](https://docs.google.com/document/d/1iQFxU6j2krs8LQ_as9YlnTbU-n8wddUvEWZfIYGMp6g/edit?usp=sharing)
    - [x] Item Guides
      - [x] Items List (don't need to show locations of special items, cause it's already listed on the recruitment guides?)
      - [x] Armor List
        - [x] Mobile styling
      - [x] Accessory List
      - [x] Magic List
      - [x] Magic Crystal List
        - [Doc Link](https://docs.google.com/document/d/1VrYarRlOR5G0cv853L-S5BDgXyjPfrrCGlfyysjMoIg/edit?usp=sharing)
      - [x] Treasure Chest List
        - [x] Don’t need to show the “500 Arn” on Treasure Island, since that’s just part of story cutscene
        - [x] For Avalon, need an extra note for the last two chests, that they’re only accessible by obtaining the Ornate Key item from a bookshelf on a different room
        - [x] There’s a typo on “Nocturne Keep” name, it should be “Nocturn Keep”
        - [x] Implement image modal
        - [x] Find better way to display tips
    - [x] Shop Guides
      - [x] General Store List
      - [x] Blacksmith (Weapons) List
      - [x] Blacksmith (Armors) List
      - [x] Magic Shop List
        - [x] St. Reinard magic shop is missing from this list. It sells “Heal” + Tal Gren items + Ashton Port items
    - [x] Miscellaneous Guides
      - [x] Gameplay Tips
        - [Doc Link](https://docs.google.com/document/d/1miT-mg7vmI-H2t-K8yAK0rIaY3z1oOoyL1P0f8-TVpc/edit?usp=sharing)
      - [x] Menu Set List
      - [x] Battle Plan List
      - [x] Enemy Loot Guide
        - [x] Remove this, obsoleted by Enemies List
      - [x] Boss List
        - [x] Remove this, obsoleted by Enemies List
      - [x] Gaia's Heart Guide
      - [x] Shiva Passage Guide
      - [x] Johnny's Blackjack Table
      - [x] Bugs/Glitches and Mishaps will go into Extras
    - [ ] Extras
      - [x] Meiko's Interviews
        - [Doc Link](https://docs.google.com/document/d/1jhBzmHvvOIau-0_Il2jntIN0lZEFnjHcnBHL3ptSJFQ/edit?usp=sharing)
        - srd left more instructions for this page
      - [ ] Secrets
        - [ ] Add images and formatting
        - [x] Remove the s21 name at the end, was srd's old account name
      - [x] BGM List
        - [x] Bayside music is mistakenly listed as “Final Fantasy XI” when it’s should be “IX”
        - [x] Cento music is mistakenly listed as “Due Fiumi”, when it’s actually “Two Rivers”
        - [x] Mobile responsive
      - [x] Bugs/Glitches and Mishaps
        - [Doc Link](https://docs.google.com/document/d/11shq2RivooaDxLwwdNfgaxng2JzfaLLT91S3h5MnuT0/edit?usp=sharing)
      - [x] Game Mechanics Formulas
        - [ ] Make math formulas look good.
        - [Doc Link](https://docs.google.com/document/d/1E5Bd5KcVg8OTjkW-Fr4lI4MPqLQ6QiuHFqVryonAEeE/edit?usp=sharing)
      - [x] Comic: The Wanderer
  - [x] Forum
  - [x] Contact

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
