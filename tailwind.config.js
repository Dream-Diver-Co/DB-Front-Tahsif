/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sec: 'var(--secondary)', // This uses the CSS variable
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

