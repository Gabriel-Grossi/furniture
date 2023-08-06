/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "title": 'Rufina',
        "body": 'Inter'
      }

    },
  },
  plugins: [require('@tailwindcss/forms')],
}

