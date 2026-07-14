// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({context: 'server', access: 'public', default: true}),
      SCORE_API_ENDPOINTS: envField.string({context: 'server', access: 'public', default: "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new"})
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});