// Network first, so updates arrive; saved copy is used when offline.
const CACHE="life-planner-v1";
const FILES=["./","index.html","manifest.webmanifest","icon.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||!e.request.url.startsWith(self.registration.scope))return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r})
    .catch(()=>caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true}))));
});
