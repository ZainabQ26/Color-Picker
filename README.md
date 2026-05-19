# Color Picker

A simple color wheel picker built with React and Vite.

## Features

- Draws an HSL color wheel on a canvas
- Hover to preview colors (work in progress)

## Quick start

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open the app at the URL shown by Vite (usually http://localhost:5173).

## Files

- [src/App.jsx](src/App.jsx#L1) — main app drawing the color wheel

## Next steps

- Wire hover and selection states to UI
- Add accessibility labels and keyboard support

Feel free to tell me if you want a longer README or a license added.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
