import type { Config } from 'tailwindcss';
import { screens } from './tailwind.screens';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens,
    fontFamily: {
      roboto: ['var(--font-roboto)', ...fontFamily.serif],
      poppins: ['var(--font-poppins)', ...fontFamily.sans],
    },
    fontSize: {
      h1: '67px',
      h2: '51px',
      h3: '38px',
      h4: '28px',
      h5: '22px',
      body: '16px',
      caption: '12px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      'main-blue': '#2A4D8A',
      'acrylic-blue': '#daecf7',
      'cloudy-gray': '#F2F5F7',
      'stormy-gray': '#6C7A89',
      'charcoal-gray': '#000401',
      tangerine: '#F7C046',
    },
  },
  plugins: [],
} satisfies Config;
