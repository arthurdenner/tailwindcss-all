# tailwindcss-all

TailwindCSS plugin that adds utilities for the `all` CSS property.

The `all` shorthand CSS property resets all of an element's properties except [`unicode-bidi`](https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi), [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction), and [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

Check the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/all) for examples of the property.

## Usage

```bash
npm install tailwindcss-all
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
