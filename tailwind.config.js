/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "blue-shade-1": "#081944",
        "blue-shade-2": "#0F41A9",
        "blue-shade-4": "#104CC4",
        "blue-shade-3": "#114DC7",
        "blue-shade-5": "#135BEA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
