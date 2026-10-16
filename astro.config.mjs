import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://varundey.me',
  publicDir: './static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { syntaxHighlight: 'prism' }
});
