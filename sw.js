const  VERSION = 'v1'

self.addEventListener('install', event =>{
    event.waitUntil(precache());
})

self.addEventListener('fetch', event =>{
    const request =  event.request; // extraer la peticion
    // get

    if(request.method !== 'GET'){
        return;
    }

    // buscar en cache

    event.respondWith(cachedResponse(request));

    // actulizar el cache

    event.waitUntil(updataCache(request))
})

async function precache (){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/maquiavelico.mp4'
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request);

    return response || fetch(request)
}

async function updataCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)

    return cache.put(request, response)
}