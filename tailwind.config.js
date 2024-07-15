

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '95': '24rem',
        '100': '25rem',  // custom height
        '110': '27.5rem',  // custom height
        '120': '30rem',  // custom height
        '130': '32.5rem',  // custom height
        '140': '35rem',  // custom height
        '150': '37.5rem',  // custom height
        '160': '40rem',  // custom height
        '200': '50rem',  // custom height
        '250': '62.5rem',  // custom height
      },
    },
  },
  plugins: [
    
  ],
}