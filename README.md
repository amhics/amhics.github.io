# Academic Website

A simple, dependency-free academic homepage with an emphasis on teaching.
Plain HTML + CSS — no build step, no framework. Edit the files, push, done.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: header, quote, about, teaching highlights, publications, news, contact |
| `teaching.html` | Full teaching page: philosophy, current courses, semester history, mentoring |
| `theme.css` | All styling. Colors/fonts are CSS variables at the top of the file |
| `images/portrait.svg` | Placeholder photo — replace with your own picture |
| `favicon.svg` | Browser-tab icon (a monogram — change the letter) |
| `files/` | Put PDFs (papers, syllabi, CV) here |

## Editing checklist

Search for `EDIT:` comments in the HTML files. In short:

1. Replace **"Your Name"**, title, department, and university (in **both** HTML files — header is duplicated).
2. Update the contact links in the header (email, GitHub, Google Scholar, LinkedIn).
3. Drop your photo into `images/` (e.g. `images/me.jpg`) and update the two `<img src="images/portrait.svg">` tags.
4. Pick your epigraph quote in `index.html` — alternatives are in an HTML comment right below it.
5. Fill in the About, Teaching, Publications, and News placeholders.
6. Optional: change the accent color by editing `--accent` at the top of `theme.css`.

To preview locally, just open `index.html` in a browser, or run
`python3 -m http.server` in this folder and visit http://localhost:8000.

## Publishing on GitHub Pages

1. On github.com, create a **new public repository** named exactly
   `YOUR-USERNAME.github.io` (e.g. `amhamza.github.io`). Don't add a README
   or .gitignore — leave it empty.

2. In a terminal, from this folder:

   ```sh
   cd academic-website
   git init
   git add .
   git commit -m "Initial version of academic website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```

   If git asks for your identity first:

   ```sh
   git config --global user.name "Your Name"
   git config --global user.email "a.m.hamza@gmail.com"
   ```

3. That's it — for a repo named `YOUR-USERNAME.github.io`, GitHub Pages is
   enabled automatically. Within a minute or two the site is live at
   **https://YOUR-USERNAME.github.io**. (If it doesn't appear, check
   Settings → Pages and make sure the source is the `main` branch.)

4. To update the site later: edit files, then
   `git add . && git commit -m "update" && git push`.
