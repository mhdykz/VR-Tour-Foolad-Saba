const CACHE_NAME = 'vr-tour-v1';

// فایل‌های حیاتی که در همان ثانیه اول برای اجرای آفلاین باید کش شوند
const CORE_ASSETS = [
  './',
  './index.html',
  './pano2vr_player.js',
  './pano.xml',
  './preview.jpg'
];

// مرحله نصب: ذخیره فایل‌های اصلی در کش
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching core files...');
      return cache.addAll(CORE_ASSETS);
    })
  );
});

// مرحله فعال‌سازی: کنترل کامل تمام صفحات باز
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// مرحله رهگیری شبکه (جادوی اصلی برای صفر کردن مکث هات‌اسپات‌ها)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // اگر فایل (ویدیو، تصویر تایل و...) در مموری بود، بدون معطلی و در کسر ثانیه پخشش کن
      if (cachedResponse) {
        return cachedResponse; 
      }
      // اگر در مموری نبود، با بالاترین سرعت از Nginx بگیر و همزمان کپی آن را در مموری ذخیره کن
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});