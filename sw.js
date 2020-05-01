var shellCacheName = "pwa-jump-ball-v1"; // questo id deve cambiare ogni volta che rilasci una nuova versione dell'app
var filesToCache = [
  // html
  "./index.html",
  "./credit.html",
  "./information.html",
  "./startMenu.html",

  // javascript
  "./src/game/p5.min.js",
  "./src/game/ball.js",
  "./src/game/graphics.js",
  "./src/game/points.js",
  "./src/game/endGame.js",
  "./src/game/engine.js",
  "./src/game/JumpingBall.js",
  "./src/game/sketch.js",
  "./index.js",

  // css
  "./src/style/index.css",

  //image
  "./src/assets/icon/illusione-cerchio.jpg",
  "./src/assets/icon/illusione-linee.png",
  "./src/assets/icon/illusione-quadrato.png",
  "./src/assets/icon/illusione-quadrato2.png",
  "./src/assets/icon/play.svg",
];

// Listen to installation event
self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(shellCacheName).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

// Listen to fetching event
self.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
