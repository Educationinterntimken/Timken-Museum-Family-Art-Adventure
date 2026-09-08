TIMKEN MUSEUM OF ART — SECRET ART AGENT WEB APP

This folder is ready to deploy as a static website on Netlify.

FILES
- index.html: app shell
- styles.css: mobile layout, Poppins styling, controls and confetti
- app.js: four missions, navigation, answer saving, drawing tools and word search logic
- assets/: supplied mission artwork used as full-page backgrounds

CURRENT MISSION CONTENT
- Mission 1: intro + seven activities + conclusion
- Mission 2: intro + activities supplied in the artwork + conclusion
- Mission 3: intro + seven activities + conclusion
- Mission 4: intro + seven activities + conclusion

INTERACTIVITY
- Start button on each mission intro
- Back / Next controls on activity pages
- Text fields and text areas
- Single-select and multi-select activities
- Checklists
- Drawing canvases with Pen, Eraser and Clear
- 10x10 word search for Mission 4
- Confetti on every conclusion page
- Answers are stored locally in the browser so they remain while moving between pages

NETLIFY
1. Keep index.html, styles.css, app.js and the assets folder together.
2. Drag this whole folder into Netlify Drop, or upload the ZIP and deploy the extracted contents.
3. index.html must remain at the top level of the deployed folder.

EDITING INTERACTIVE PLACEMENT
Each interaction in app.js has pos:[left, top, width, height]. Values are percentages of the 9:16 page, which makes it easy to move an activity without changing the supplied background image.

Revision notes (September 8, 2026):
- Mission 1 Q1 answer moved below the final image.
- Mission 1 Q7 is now the conclusion page; extra name box and extra conclusion removed.
- Mission 2 Q1 number circles aligned directly over the printed 8, 6, and 2.
- Mission 2 Q4 answer panel moved higher and made fully opaque.
- Mission 2 Q5 uses a small count field beside the painting and direct highlighting of printed red words.
- Mission 3 Q3 uses direct highlighting of the printed descriptive words.
- Mission 3 Q4 response fits inside the green thought bubble with a softer translucent field.
- Mission 3 Q5 includes a drawing canvas over the portrait sketch, with pen/eraser/clear tools.
- Mission 3 Q6 response field moved lower and centered.
- Mission 4 Q1 and Q2 use the newly supplied background artwork.
- Mission 4 Q4 and Q5 response fields moved lower and centered.
- Mission 4 Q6 is now an 8x8 word search.
- Mission selection screen now displays Completed badges for finished missions.
