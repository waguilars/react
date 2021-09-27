# ⚛ React template

React template using vite with my personal config.


## Features

- Vite
- eslint with
  - airbnb styleguide
  - simple import sort
- Tests with
  - Enzyme
  - Jest
- Support for alias (@hooks -> src/hooks)

---
**NOTE**

To add new alias open vite.config.js and set a new alias.
```
alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@newAlias': path.resolve(__dirname, './src/pathOfAlias'),
      ...
    },
```

If VsCode does not recognize the alias then add the alias in the jsconfig.json file too.
```
"paths": {
      "@components/*": ["src/components/*"]
      "@alias/*": ["src/path/*"],
      ...
    }
```


---