module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `sections/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      textColor: ['visited', 'disabled', 'hover'],
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
      ringColor: ['disabled'],
      ringWidth: ['disabled'],
    },
  },
}