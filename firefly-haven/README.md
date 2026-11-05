# Firefly Haven

A React + Vite theme-toggle assignment with a daytime meadow and twelve animated nighttime fireflies.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## How the assignment requirements are met

- `src/App.jsx` **owns the theme** using `useState` and passes it through props.
- `src/components/ThemeToggle.jsx` accepts the theme and `onToggle` callback; a real `<button>` changes modes.
- `Header`, `Nav`, `Footer`, and the content respond to the theme through CSS variables on `.app`.
- `ThemeToggle` uses `useRef` to reference its button, and `useEffect` to return focus after the user toggles the theme (not on initial load).
- CSS adds hover feedback, animated transitions, and a visible keyboard focus ring.
- `localStorage` saves the choice; system dark mode is used as the default on first visit.
- `prefers-reduced-motion` keeps the interface accessible.
- `Fireflies.jsx` displays 12 fixed, floating CSS fireflies.

## Publish source to GitHub

```bash
git init
git add .
git commit -m "Build Firefly Haven React theme toggle"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not run `git init` or add a second remote if you already cloned the repository. Use `git add .`, `git commit`, and `git push` instead.
