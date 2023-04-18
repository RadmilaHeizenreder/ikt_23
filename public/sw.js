importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
//   später schreiben wir unser sw.js selbst
  
  workbox.routing.registerRoute(
      ({request}) => request.destination === 'image',
      new workbox.strategies.NetworkFirst()     // NetworkFirst() vs CacheFirst()
  )