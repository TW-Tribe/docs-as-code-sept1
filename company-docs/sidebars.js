```js
// sidebars-a.js
module.exports = {
  productASidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/install', 'getting-started/quickstart'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/authentication', 'guides/webhooks'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/overview', 'api/endpoints'],
    },
  ],
};
```
