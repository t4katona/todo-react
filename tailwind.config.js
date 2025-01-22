/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: {
          hoverColor: "#000000cc",
        },
        secondary: {
          backgroundColor: "#cccccc47",
        },
        modal: {
          overlay: "#000000cc",
        },
      },
      flex: {
        board: "2 1 auto",
      },
      borderColor: {
        primary: "#ccc",
      },
      borderWidth: {
        mainWidth: "1px",
      },
    },
  },
  plugins: [],
};
