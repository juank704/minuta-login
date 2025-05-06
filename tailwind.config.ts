// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        libertad: '#2C264D', // <- aquí defines el color personalizado
      },
    },
  },
  plugins: [],
};

export default config;