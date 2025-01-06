// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    ssr: {
      // external: ["node:fs", "node:path", "node:url"],
    },
    build: {
      rollupOptions: {
        external: [
          'unenv/runtime/node/timers/$cloudflare.mjs',
          'unenv/runtime/node/console/$cloudflare.mjs',
          'unenv/runtime/polyfill/performance.mjs',
          'unenv/runtime/node/process/$cloudflare.mjs'
        ]
      }
    }
  }
});