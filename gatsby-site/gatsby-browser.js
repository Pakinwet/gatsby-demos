/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.disableCorePrefetching = () => true


// We override loadPage & loadPagesync to fix canonical redirects
// we also override hovering to disable hover prefetch
exports.onClientEntry = () => {
  const loader = window.___loader;

  // disable hovering prefetching as we don't know if we can.
  loader.hovering = () => { };
}