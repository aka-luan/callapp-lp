const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': ['1.953rem', '2.625rem'],
      '3xl': ['3.815rem', {
        lineHeight: '4.525rem',
        letterSpacing: '-1px'
      }],
    },
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
        lg: '3rem',
        xl: '5rem'
      },
    },
  },
  plugins: [],
};
