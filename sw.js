/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1447289e85681ab4142b.js"
  },
  {
    "url": "app-88f1db7c01aca8ffb6f8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-daa6a38c24810a50bf8e.js"
  },
  {
    "url": "index.html",
    "revision": "d7ab5b52d5eb1acf0bcc7de53f1fa343"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d01750c1b7c4b43b4bb5da54dca8e757"
  },
  {
    "url": "component---src-pages-index-js.02bffd3c8b30bd7fd51a.css"
  },
  {
    "url": "5-30594f8cecd2cb6a80ce.js"
  },
  {
    "url": "component---src-pages-index-js-1bcb80ebfa4329352e68.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-6036565b2a336fe92c2a.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b5a807fb30632526feb8372e64a6ec21"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/^https:\/\/assets-us-01.kc-usercontent.com\//, workbox.strategies.staleWhileRevalidate({ "cacheName":"kc-assets-data", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.expiration.Plugin({"maxAgeSeconds":3600,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/kentico.github.io/, workbox.strategies.staleWhileRevalidate({ "cacheName":"local-assets", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/avatars[0-9]+.githubusercontent.com\//, workbox.strategies.staleWhileRevalidate({ "cacheName":"github-assets-webfonts", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.expiration.Plugin({"maxAgeSeconds":3600,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});