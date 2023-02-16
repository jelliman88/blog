/** @type {import('tailwindcss').Config} */
module.exports = {
  //important: true,
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
            },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  variants: {
    animation: ["motion-safe"]
}
}
