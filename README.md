# Lab Notebook · Next Chapter

An interactive notebook flipbook for tracking lab exercises across the program.
Spiral-bound aesthetic, page-flip animation, day tabs, highlighter and dual ink
colors for distinguishing my voice from AI's.

## Files

```
notebook/
├── index.html      structure (tabs, binding, page area, controls)
├── styles.css      all styling — paper, ink, tabs, animation, highlighter
├── data.js         content — array of days, each with an array of pages
├── notebook.js     flipbook logic — tab nav, page flip, keyboard
└── README.md       this file
```

## Run locally

Open `index.html` directly in a browser — it works as a static page, no build
step. For best results (avoiding any cross-origin quirks), serve it instead:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (root of the repo, or in `/docs`).
2. In the repo: **Settings → Pages**.
3. Under "Source", pick the branch (usually `main`) and folder (`/` or `/docs`).
4. Save. Your notebook will be at `https://<username>.github.io/<repo>/`.

## Adding a new day

Open `data.js`. Find the day you want to fill in (e.g. Day 2, currently a
placeholder), and replace it with a real entry:

```js
{
  number: 2,
  title: "Building blocks",
  date: "May 2026",
  pages: [
    `<div class="nb-cover">
       <h1>Day 2</h1>
       <h2>Building blocks</h2>
       <p class="rule">~ ~ ~ ~ ~ ~ ~</p>
       <p class="meta">May 2026 · lab notebook</p>
       <p class="sig">— Chops</p>
     </div>`,

    `<h3 class="nb-h">Ex. 1 — your title here</h3>
     <p class="nb-p">Your notes here.</p>`,

    /* …more pages… */
  ]
}
```

Each page is just an HTML string. Add as many pages per day as you want.

## Style helpers (use inside page HTML)

| Class                 | What it does                                      |
| --------------------- | ------------------------------------------------- |
| `nb-h`                | Page heading (Caveat font, underlined)            |
| `nb-p`                | Paragraph                                         |
| `nb-arrow`            | Italicized takeaway / reflection line             |
| `nb-list`             | Unordered list with red bullet dots               |
| `nb-soft`             | Muted asides / parentheticals                     |
| `nb-code`             | Code block (monospace, dashed tan border)         |
| `nb-codelabel`        | Italic label above a code block                   |
| `ai`                  | AI's voice — switches ink to green                |
| `me`                  | Explicit my-voice ink (default, rarely needed)    |
| `hl`                  | Yellow highlighter background                     |
| `hl-pink`             | Pink highlighter (alt emphasis)                   |

Inside `nb-code` blocks, you can use `c-comment` for arrow annotations.

## Conventions I'm using in Day 1

- **Yellow highlighter** marks the actual answer / key insight for each exercise
- **Green ink (`ai` class)** is for things the AI said, so it's visually
  separate from my own voice
- **Code blocks** are used any time the content *is* code — including notes
  about code (what changed, where things live)

## Keyboard shortcuts

- `←` / `→` — flip pages
- click day tabs at the top to jump days

## Future ideas (when ready)

- Edit-in-place mode with `localStorage` persistence
- Search across all days
- Export to PDF
- Sticky-note overlays for cross-references
- Dog-ear bookmarks on important pages
