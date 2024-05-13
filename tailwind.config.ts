import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'white-mist': '#fbfbfb',
      'subtle-gray': '#DED9D5',
      'earth-brown': '#968275',
      'ash-brown': '#7C6A5C',
      'dark-olive': '#4F4F3E',
      'petrol-blue': '#364156',
      'blue-black': '#171A26',
      'dark-charcoal': '#22221B',
      'transparent': 'transparent',
    },
    extend:{
      boxShadow: {
        'btn': '0 4.25px 4.25px rgba(0, 0, 0, 0.25);',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.jpg')",
      },
    },
    variants: {},
  },
  plugins: [],
};
export default config;
