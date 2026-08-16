import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lavender-hero': '#817eff',
        'mint-field':    '#e4faf1',
        'peach-workflow':'#ffe8dd',
        'forest-text':   '#003b26',
        'forest-cta':    '#004d34',
        'forest-secondary': '#243b35',
        'coral-accent':  '#fda4af',
        'blue-accent':   '#93c5fd',
        'sky-accent':    '#dbeafe',
        'mint-accent':   '#d7f0de',
        'yellow-accent': '#fef08a',
        'lavender-light':'#d7daf7',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        button:    '8px',
        card:      '12px',
        'card-lg': '16px',
        panel:     '28px',
      },
      boxShadow: {
        brutal:    '6px 6px 0 #003b26',
        'brutal-sm': '4px 4px 0 #003b26',
      },
    },
  },
  plugins: [],
};

export default config;
