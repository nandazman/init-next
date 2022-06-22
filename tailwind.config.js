/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    borderRadius: {
      none: "0",
      sm: "5px",
      DEFAULT: "4px",
      md: "8px",
      lg: "10px",
      full: "9999px",
      large: "12px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "30px": "30px",
        "40px": "40px",
        "32px": "32px",
        "48px": "48px",
        "50px": "50px",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        quicksand: ["Quicksand"],
      },
      colors: {
        "light-blue": "#2D3356",
        "tosca-blue": "#49A0A4",
        black: "#000000",
        "dark-blue": "#1D2038",
        red: "#DA4040",
        gren: "#4DA533",
        yellow: "#F1C244",
        pink: "#fbeadd",
        purple: "#555FAE",
        "light-grey": "#CCCCCC",
        "dark-grey": "#4B4B50",
        orange: "#E87F2F",
        "greyish-blue": "#8692A6",
        "disabled-form": "#F1F2F2",
        "line-grey": "#E1E1E1",
        "placeholder-grey": "#A5A5A5",
      },
      borderColor: {
        "greyish-blue": "#8692A6",
      },
    },

    container: {
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    fontSize: {
      h1: "58px",
      h2: "48px",
      h3: "36px",
      h4: "24px",
      h5: "20px",
      "normal": "16px",
      "medium": "14px",
      "small": "12px",
    },
  },
  plugins: [],
};
