# Ancestor Dinner — GitHub Pages website

**Live site:** https://mariiakit-official.github.io/Ancestor-Dinner/  
**Repository:** https://github.com/mariiakit-official/Ancestor-Dinner

A static, mobile-friendly website with an eight-slide opening presentation, a Unity Garland and Memory Box activity, and a future photo gallery. No server, framework, or paid hosting required.

## Publish
1. Unzip this folder. Create a new **public** GitHub repository (for example `ancestor-dinner`).
2. Upload **all the files and the `images` folder** to the repository root (not inside an extra nested folder).
3. In GitHub open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, **main**, and **/(root)**, then save.
4. The site is published at https://mariiakit-official.github.io/Ancestor-Dinner/

## During the event
- Open the website on your laptop and select **Present**.
- Use left/right arrow keys or the on-screen arrows to change slides.
- Select **Notes** to see the complete speaker's script. **Important:** notes are visible on the same screen, so close the notes before projecting, or read the separate `speaker-script.txt` on a second device.
- Use the fullscreen button if you want the slide to fill the projector screen.

## Unity Garland + Memory Box — "Roots & Connection"
- Set out about 25 large-hole wooden beads (for ~20 people) and sturdy cord. Guests add one bead each to form a shared keepsake.
- Choose cord that fits the holes and leave enough length to knot securely. Assemble on a table; guests can add beads during dinner.
- The presentation now has **slide 6 for the Unity Garland** and **slide 7 for the Memory Box**, both using actual photographic visuals. **Slide 8 welcomes guests to dinner.**
- Replace `images/unity-garland.jpg` and `images/memory-box.jpg` with your own photos after buying the supplies if you prefer. Keep the same filenames.

## Memory Box — "The Roots We Carry"
- Set a wooden box on a small table with cards and pens (roughly 25–30 cards for about 20 guests).
- After the opening presentation, invite guests to write one value, lesson, memory, or wish inherited from family or ancestors.
- Guests can leave a card in the box anytime during dinner. Participation and names are optional.
- The presentation's seventh slide introduces the box; the eighth welcomes everyone to dinner.
- Keep the physical notes safe. **Do not publish private messages without the authors' specific permission.** The website's “Wisdom We Carry” section is a placeholder, not an upload form. To add consented quotes, manually edit `index.html` after dinner.

## Add photos after the dinner
1. First ask guests for permission to publish photos on a **public** website; avoid showing guests who haven't consented, especially children.
2. Create `images/gallery/` inside the repo. Upload optimized JPG photos, such as `group-photo.jpg`, `food-table.jpg`.
3. Open `script.js` and change `const photos=[];` near the end to:

```js
const photos=[
  {file:'group-photo.jpg',alt:'Guests gathered at Ancestor Dinner'},
  {file:'food-table.jpg',alt:'Traditional dishes shared at dinner'}
];
```

4. Commit. GitHub Pages will republish the gallery. Add photos whenever you like.

## Customization
- Edit text in `index.html`.
- Edit opening slides and speaker notes in the `slides` array of `script.js`.
- Replace the existing images in `images/` with your own; keep their filenames or update paths.
- Google Fonts are used when online; system fonts work when offline.
- The current food mentions are **not** assignments of a dish to any individual or to a particular heritage unless explicitly established.

## Organizing team

Mariia Kit, Raymond Hall, and Andre Woolfolk.

## November 11 image update
- The original, clean candlelit pictures selected by the organizers are now included in `images/memory-box.jpg` and `images/unity-garland.jpg` (not screenshots of the image viewer).
- They appear both on the website and in the presentation slides.
- Slide 6 is titled **Connected by Our Stories**; slide 7 is **The Roots We Carry**.
