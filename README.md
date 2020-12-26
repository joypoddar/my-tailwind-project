[Instructions](https://www.youtube.com/watch?v=21HuwjmuS7A&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=1)
npm init -y

npm install tailwindcss@latest postcss@latest autoprefixer@latest --save

npm install postcss-cli

npx tailwind init

create a new file `postcss.config.js` in the project root

add the lines below

```
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

create a new file again `css/tailwind.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
"build": "postcss css/tailwind.css -o public/build/tailwind.css"
```

npm run build

Create a new file `public/index.html`

Add the `backgroundColor` object to load the required classes.

Then run `npm run build`

```
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    // the order of the variants matter because of precedence of css rules
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {},
  },
  plugins: [],
};
```
