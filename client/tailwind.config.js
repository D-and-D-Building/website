
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto",
        "sidebar-collapsed": "64px auto",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'),
  ],
}

