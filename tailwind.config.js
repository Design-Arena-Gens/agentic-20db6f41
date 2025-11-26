/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        'text-primary': '#EDEDED',
        'text-secondary': '#888888',
        'accent-glow': '#00D1FF',
        'accent-secondary': '#FFFFFF',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
