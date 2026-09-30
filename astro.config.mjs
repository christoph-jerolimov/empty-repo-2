// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import { liveCode } from './src/lib/live-code-plugin.ts';

export default defineConfig({
  site: 'https://ecmascript.de',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  markdown: {
    processor: satteri({ mdastPlugins: [liveCode], features: { smartPunctuation: false } }),
  },
});
