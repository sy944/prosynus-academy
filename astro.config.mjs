import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://prosynus-academy.de',
  integrations: [tailwind()],
});