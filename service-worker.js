async function index(req, res, next) {
  if ("function" === typeof importScripts) {
    importScripts("https://js.pusher.com/beams/service-worker.js");
  }
}

module.exports = { index };
