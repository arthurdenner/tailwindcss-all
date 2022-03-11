const plugin = require('tailwindcss/plugin');

function allPlugin({ addUtilities }) {
  addUtilities({
    '.all-initial': { all: 'initial' },
    '.all-inherit': { all: 'inherit' },
    '.all-revert': { all: 'revert' },
    '.all-unset': { all: 'unset' },
  });
}

module.exports = plugin(allPlugin);
