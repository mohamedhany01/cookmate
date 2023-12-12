import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      mate: {
        orange: '#E36824',
        green: '#5B7C75',
        gray: '#363636',
        black: '#1C1C1C',
        white: '#FFFCF7',
        offWhite: '#FDEED9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
