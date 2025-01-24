/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "border-todo-border",
    "bg-todo-bg",
    "border-inprogress-border",
    "bg-inprogress-bg",
    "border-completed-border",
    "bg-completed-bg",
    "border-onhold-border",
    "bg-onhold-bg",
  ],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        Roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: {
          hoverColor: "#000000cc",
        },
        secondary: {
          backgroundColor: "#cccccc47",
          hoverColor: "#f7f7f7",
        },
        modal: {
          overlay: "#000000cc",
        },
        tasks: {
          todo: {
            bg: "#F9D5E5",
            border: "#F1B2C6",
          },
          inprogress: {
            bg: "#D3E6F4",
            border: "#A6C7E1",
          },
          completed: {
            bg: "#D6F5D6",
            border: "#B8E5B5",
          },
          onhold: {
            bg: "#FFF4E5",
            border: "#FFE1B2",
          },
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
