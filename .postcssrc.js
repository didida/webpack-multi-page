// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
    "postcss-bem": {
      shortcuts: {
        'component-namespace': 'namespace',
        'component': 'block',
        'descendent': 'element',
        'modifier': 'modify'
      }
    },
    "precss": {}
  }
}
