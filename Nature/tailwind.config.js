/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'periwinkle': '#BEB7DF', // Custom color
        'periwinkle-500': '#A8A0C8',
        'lavendar': '#E5E2F4',
        
        'black': '#333333',
        'white': '#F5F5F5',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
