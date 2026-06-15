# JS Concepts Guide — Local Setup

Quick steps to run this static site locally.

Prerequisites
- Node.js (for `npx sass`) — recommended but optional
- Python (optional) for a simple static server

Compile SCSS to CSS
The repository stores styles in `.scss`. The browser requires compiled `.css` files.

From the project root (PowerShell):

```powershell
# (optional) initialize npm if you want package.json
npm init -y

# Install Dart Sass locally (optional) or use npx directly
npm install --save-dev sass

# Compile all SCSS files in `css/` to CSS files in `css/`
npx sass css:css --no-source-map

# Or watch and recompile during development:
npx sass --watch css:css --no-source-map
```

Serve the site locally

You can open `index.html` directly after compiling CSS, but using a local server is recommended.

Options:

```powershell
# Using `serve` (install globally or use npx)
npx serve -s .

# Using Python (built-in)
python -m http.server 8000
```

Open your browser at the address printed by the server (e.g., http://localhost:3000 or http://localhost:8000).

Notes
- The project links to `css/*.css` files; if you don't compile the SCSS these files will be missing and pages will appear unstyled.
- This repository now commits compiled CSS so GitHub Pages will serve styled pages. If you prefer to keep built CSS out of the repo, revert the change in `.gitignore` and set up a CI build that publishes compiled assets.

Troubleshooting
- If styles still don't appear, confirm `css/index.css` (and other `*.css`) exist in the `css/` folder.
- If a page's JS interactions don't work, ensure `js/common.js` is present and included (it should be).
