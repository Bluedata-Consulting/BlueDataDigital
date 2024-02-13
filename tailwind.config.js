/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "blue-shade-1": "#163278",
        "blue-shade-2": "#0F4187",
        "blue-shade-3": "#114DC7",
        "blue-shade-4": "#135BEA",
        "blue-shade-5": "#DDEDFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
