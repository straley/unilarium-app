
exports.config = {
  namespace: 'App',
  bundles: [
    { components: [
      'papercraft-layout', 'papercraft-icon', 'papercraft-icon-button',
      'papercraft-material-icon']
    },
    { components: ['unilarium-app'] },
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
