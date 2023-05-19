import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";
import prefetch from "@astrojs/prefetch";
import defaultPrerender from "astro-default-prerender";

import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [
    prefetch({
      selector: "a[href^='/']",
      selector: "a[href^='/seminar']",
      selector: "a[href^='/paper']",
      selector: "a[href^='/journalpartners']",
      selector: "a[href^='/contact']",
      selector: "a[href^='/sponsors']",
      selector: "a[href^='/committee']",
      selector: "a[href^='/cohost']"
    }), 
    defaultPrerender(), 
    webmanifest({
      name: 'NCAFA Trilogi',
      short_name: 'NCAFA',
      description: 'National Conference on Accounting & Fraud Auditing (NCAFA) merupakan sebuah  konferensi tingkat  nasional di bidang akuntansi dan audit yang memiliki rangkaian kegiatan Call for Paper dan Seminar.',
      theme_color: "#47A2C6",
      background_color: '#ffffff',
      start_url: '/',
      display: 'standalone',
      icons: [{
        "src": "icon/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }, {
        "src": "icon/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      }, {
        "src": "icon/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      }, {
        "src": "icon/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
      // add any other icons
      ]
  })],
  integrations: [serviceWorker(
    {
      /** Provide custom service worker logic */
      swSrc: 'user-sw.js',

      /** 
       * Excludes specific pages from the service worker bundle, and forces them to always go to the network
       * This is useful for server-only specific code, for example database connections
       */
      networkOnly: ['/networkonly-astro'],

      /** Configure workbox options */
      workbox: {},

      /** Both default to true, useful if you want to provide a custom installation experience */
      skipWaiting: false,
      clientsClaim: false,

      /** Configure esbuild options */
      esbuild: {},

      /** Enables minifcation for esbuild, defaults to true */
      minify: false,

      /** Override the default service worker registration and update script */
      swScript: '',
    }),
  ]
}
  );