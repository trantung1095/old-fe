/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '31vh': '31vh'
      },
      margin: {
        '25vh':'25vh'
      },
      height: {
        650: '650px',
        53: '53px'
      },
      lineHeight: {
        36: '36px'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.9375rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        31: '31px'
      },
      maxWidth: {
        480: '480px',
        '80vw': '80vw',
        364: '364px'
      },
      maxHeight: {
        '90vh': '90vh'
      },
      colors: {
        'light-gray': 'rgb(207, 217, 222)',
        'color-black': 'rgb(15, 20, 25)',
        'login-bg': 'rgba(0, 0, 0, 0.4)',
        'google-button-color': '#202124',
        'login-button-border': '#dadce0',
        'sign-up-color': 'rgb(29, 155, 240)'
      },
      minWidth: {
        48: '48px',
        600: '600px',
        364: '364px'
      },
      minHeight: {
        48: '48px',
        120: '120px',
        400: '400px'
      },
      width: {
        300: '300px'
      }
    },
  },
  plugins: [],
}
