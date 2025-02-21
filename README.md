# Single Page Annotation Lite

Migrate from `single-page-annotation`

1. Move the `payload` reading logic into `src/index.jsx`.
2. Remove all `import React from 'react'` and `import ReactDOM from 'react-dom'` in all your `.jsx` files.
3. For the four main dependencies, `react`, `react-dom`, `@mui/material` and `@react-spring/web` import the component from pacakge top-level instead of directly importing from the sub-module.
4. `components/Cards.jsx` $\Rightarrow$ `components/Card.jsx`

## Comments

- `npm run build` will build the project and output the result in `dist` folder.
- Development debugging currently isn't as well supported as under vite, but you can still run a `live-server` in the `dist` folder to see the result in real-time.
- Currently the bundled `index.js` isn't minified for easier debugging. You can change this in the `esbuild.config.js` to further optimize the bundle size.
- A running example can be fount at the `snippet-annotation` branch of this repository.