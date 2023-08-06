module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
//   '*.{html,vue,vss,sass,less}': ['prettier --write', 'stylelint --fix'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
}
