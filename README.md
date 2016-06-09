# aria-tools
This is a collection of low-level, vanilla JavaScript tools for building
_consistently accessible_ UIs around [ARIA] roles, states, and properties.
You can use the tools directly to add ARIA-enabled interactions (including
keyboard handlers), or incorporate them into your own libraries to create
ARIA-powered web components.

## Quick Start
1. Check out the [examples](examples/) and [API documentation][API].
1. Get the code:
  * If you're using a bundler (such as Browserify, Webpack, or Rollup),
    just `npm install aria-tools` and require away.
  * Otherwise, grab [dist/aria-tools.js](dist/aria-tools.js) and drop it
    into your project.
1. If you're looking for the [custom elements], just include
   [dist/aria-elements.js](dist/aria-elements.js) and you can start using
   elements such as `<aria-accordion>` right away.

[API]: https://github.com/shawnbot/aria-tools/wiki/API
[ARIA]: https://www.w3.org/TR/wai-aria/
[custom elements]: https://github.com/shawnbot/aria-tools/wiki/API#custom-elements
