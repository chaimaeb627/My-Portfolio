
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/My-Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/My-Portfolio",
    "route": "/My-Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2026, hash: '70015fe06a21ff4958af00c09528a5c835ab592443b67a079b3e348aca12618b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2494, hash: '177447f9ec736479bfe1953145facfe64cf3e7bf340d2c45fd1bf0fbb2610344', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57428, hash: 'd98dcb6672a40f5cdfe497822dddc91d07e2f4ff1ce4be183a8f268fb7a73354', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PKANYXH2.css': {size: 46, hash: 'AAKvqYnWG2M', text: () => import('./assets-chunks/styles-PKANYXH2_css.mjs').then(m => m.default)}
  },
};
