/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        animation: {
            'blink': 'blink 500ms step-end infinite alternate'
        }
    }
  },
  plugins: [],
};
