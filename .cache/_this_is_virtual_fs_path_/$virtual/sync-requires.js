
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/shahadat/Desktop/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/shahadat/Desktop/portfolio/src/pages/index.js"))
}

