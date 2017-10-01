# Unilarium

A Web Components IDE built with Stencil.

## Application Layout
```
  unilarium-app
  | stencil.config.js     - stencil build instruction
  ├─src
  │ | index.html          - the main app index.html
  │ | manifest.json       - used for application development
  │ | site.scss           - overrides for scss variable defaults
  │ ├─applications        - the applications within the site
  │ └-papercraft          - lightweight material-ui stencil components
  └-www                   - the output directory
```

## Running Development Server
```bash
npm start
```
