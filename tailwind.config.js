const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: 'var(--green)',
        lightgreen: 'var(--lightgreen)',
        purple: 'var(--purple)',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
     
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '5rem'
      },
    },
  },
  plugins: [],
};
