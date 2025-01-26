import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          50: '#F7F8FA',
          100: '#F2F3F6',
          200: '#EAEBEE',
          300: '#DCDEE2',
          400: '#D1D3D9',
          500: '#ADB1BA',
          600: '#868B94',
          700: '#4D5159',
          800: '#393A3F',
          900: '#212124',
        },
        orange: {
          50: '#FFF5F0',
          100: '#FFE2D2',
          200: '#FFD2B8',
          300: '#FFBC97',
          400: '#FF9D66',
          500: '#FE6F0F',
          600: '#FA6616',
          700: '#F05805',
          800: '#CC4701',
          900: '#B44105',
          950: '#A03A02',
        },
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
