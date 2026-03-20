/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          50: '#faf5f0',
          100: '#f5ebe2',
          200: '#e8d5c4',
          300: '#dcbfa7',
          400: '#cf9d6f',
          500: '#c97c37',
          600: '#b8632d',
          700: '#9a5228',
          800: '#7d4424',
          900: '#693820',
        },
        warmOrange: '#ff7b42',
        deepRed: '#d63031',
        earthyBrown: '#6c5b4d',
      },
      backgroundImage: {
        'gradient-spice': 'linear-gradient(135deg, #ff7b42 0%, #c97c37 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2d3436 0%, #636e72 100%)',
        'texture-spice': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'spice-lg': '0 20px 25px -5px rgba(201, 124, 55, 0.1)',
        'spice-md': '0 4px 6px -1px rgba(201, 124, 55, 0.1)',
      },
    },
  },
  plugins: [],
}
