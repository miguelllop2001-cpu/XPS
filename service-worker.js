// Cada vez que subas una versión nueva, sube este número (v82 -> v83...)
// para que a los trabajadores les llegue la nueva y no se quede la vieja pegada.
const CACHE = 'mi-negocio-v82';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./','./index.html','./manifest.json']).catch(()=>{})));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ns => Promise.all(ns.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  if(req.url.includes('supabase.co')) return;   // datos siempre frescos
  e.respondWith(
    fetch(req).then(res => {
      if(res.ok && req.url.startsWith(self.location.origin)){
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
      }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
