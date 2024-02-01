/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / var(--tw-bg-opacity))',
        foreground: 'rgb(var(--color-foreground) / var(--tw-bg-opacity))'
      }
    },
  },
  plugins: [],
}

