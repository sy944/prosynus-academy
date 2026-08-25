/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F5EE',
        anthrazit: {
          DEFAULT: '#2E3641',
          hover: '#1E242B',
        },
        'prosynus-red': '#B21D42',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}