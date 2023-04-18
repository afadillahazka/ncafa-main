import { defineConfig } from 'astro/config';
import serviceWorker from "astrojs-service-worker";
import prefetch from "@astrojs/prefetch";

import defaultPrerender from "astro-default-prerender";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), defaultPrerender()],
  integrations: [serviceWorker()]
});