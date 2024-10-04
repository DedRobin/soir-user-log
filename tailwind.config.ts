/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/client/app/**/*.{html,js,ts,jsx,tsx}',
    './src/client/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/client/components/**/*.{html,js,ts,jsx,tsx}',
    './src/client/main.tsx',
    './src/client/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
