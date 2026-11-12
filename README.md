# Ancestor Dinner 2026 — GitHub Pages

**Live site:** https://mariiakit-official.github.io/ancestor-dinner/  
**Repository:** https://github.com/mariiakit-official/ancestor-dinner

**Many Roots. One Table. One Purpose.**  Organizers: Mariia Kit, Raymond Hall, Andre Woolfolk.

## The new two-part event structure
- **Opening presentation:** eight slides before dinner. Mariia: slides 1–3 (candles, wheat, empty chair); Raymond: slides 4–6 (traditions, cultures, purpose); Andre: slides 7–8 (Memory Box, welcome).
- **Throughout dinner:** guests may write a private card and place it in the wooden Memory Box. Guests share food and family stories if they wish.
- **Closing activity:** select **Closing activity** on the website near the end. Raymond introduces the Unity Garland, everyone who wishes adds a bead, Mariia secures the cord and reflects, and Andre thanks everyone.
- The closing presentation has **two slides**. Allow approximately 10 minutes for 20 guests to add beads, beyond the narration.

## Publish the website
1. Unzip this project. Create a public GitHub repository, such as `ancestor-dinner`.
2. Upload **the contents** of the unzipped project to the repository root (`index.html`, `script.js`, `style.css`, `images/`, etc.).
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch**. Select `main`, `/(root)`, and save.
4. Use the public GitHub Pages URL once deployment finishes. It is separate from the repository URL.

## Present at the event
- Click **Opening** / **Begin the opening presentation** when guests arrive.
- Near the end, click **Closing activity** in the navigation bar or the keepsake section.
- Arrow keys move between slides, Escape exits, and the fullscreen icon expands the display.
- **Important:** Notes appear on the SAME screen as slides. Use `three-speaker-script.txt` on a phone or as a printout rather than revealing notes to guests.

## Memory Box & Unity Garland
- You already have a box, cards, pens, beads, and cord. Set the box and cards out before the opening.
- Keep beads and cord together until the later group activity, with enough cord length for about 20 beads and secure knots.
- Participation and names are optional; never read or publish personal messages without the writer's permission.
- After finishing the garland, photograph it beside the box for the event gallery.

## Add photographs afterward
1. Obtain permission to publish identifiable guests' photographs on a **public website**.
2. Create `images/gallery/` and place optimized JPG images there.
3. Edit the `const photos=[];` array at the end of `script.js`, for example:

```javascript
const photos=[
  {file:'garland-and-box.jpg',alt:'Finished Unity Garland beside the Memory Box'},
  {file:'food-table.jpg',alt:'Dishes shared at Ancestor Dinner'}
];
```
4. Commit to GitHub. The gallery will appear automatically.

## Website assets
The images for the Empty Chair, wheat, family memories, Memory Box, and Unity Garland are included. To replace an image, overwrite its corresponding file in `images/` using the same filename.

See **`Ancestor_Dinner_2026_Speaker_Script.docx`** (print this) or **`three-speaker-script.txt`** for the complete opening and closing narration, stage directions, and a one-page quick cue card.
