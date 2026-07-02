# Nutribalance

Static bilingual landing site for Nutribalance nutrition consulting (Arabic primary, English secondary).

## Pages

| File | Language | URL |
|------|----------|-----|
| `index.html` | Arabic (default) | `/` |
| `index-en.html` | English | `/index-en.html` |

Use the **EN / عربي** toggle in the header to switch languages.

## Local preview

From the project root:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) for Arabic or [http://localhost:8080/index-en.html](http://localhost:8080/index-en.html) for English.

## Deploy (GitHub Pages)

### Option A — GitHub Actions (recommended)

This repo includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). After pushing to `main`:

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, set Source to **GitHub Actions**.
3. The workflow runs automatically on each push to `main`.

### Option B — Deploy from branch

1. Push the `main` branch to GitHub.
2. **Settings → Pages → Build and deployment**
3. Source: **Deploy from a branch**
4. Branch: **main** / **/ (root)**

**Live URL:** [https://ebrahimdawoud.github.io/Nutribalance/](https://ebrahimdawoud.github.io/Nutribalance/)

Arabic loads at the root. English is at `/index-en.html`.

## Contact (update before go-live)

Current placeholder contact details in the footer:

- Email: info@nutribalance.com
- Phone / WhatsApp: +20 102 573 4045
- Location: Cairo, Egypt

Replace these in `index.html` and `index-en.html` with your real business details.

## Structure

```
index.html          # Arabic (RTL) — default entry
index-en.html       # English
styles/main.css     # Shared styles
js/                 # Mobile menu, FAQ, how-it-works carousel
assets/             # Images and icons
```
