# tailwindcss-all

TailwindCSS plugin that adds utilities for the `all` CSS property, a shorthand for resetting all CSS properties except for `direction` and `unicode-bidi`.

Check the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/all) for examples of the property.

## Usage

```bash
npm install tailwindcss-plugin-all
```

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('tailwindcss-all'),
  ],
};
```

### Utilities

- `all-initial`
- `all-inherit`
- `all-revert`
- `all-unset`

## References

- [CSS Spec](https://www.w3.org/TR/css-cascade-3/#all-shorthand)
- [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/all)
- [caniuse data](https://caniuse.com/css-all)
