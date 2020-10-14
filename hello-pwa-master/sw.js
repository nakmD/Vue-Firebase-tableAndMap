// キャッシュ名とキャッシュするファイルの指定
let CACHE_NAME = 'simple-pwa-chaches-v1-0';
let urlsToCache = [
	'./index.html',
	'./css/style.css'
];

// インストール処理
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(chache) {
				return chache.addAll(urlsToCache);
			})
	);
});

// キャッシュロード処理
self.addEvenetListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response ? response : fetch(event.request);
		})
	);
});