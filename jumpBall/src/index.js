
// init p5 setup and draw
initializeSkeatch()

// init PWA App

// Check if browser supports service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("[ServiceWorker**] - Registered");
  });
}


