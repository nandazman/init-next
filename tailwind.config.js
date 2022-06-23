/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      identity: "#6C5DD3",
      "blue-tosca": "#49A0A4",
      orange: "#E87F2F",
      "dark-blue": "#1E223F",
      blue: "#2D3356",
      red: "#DA4040",
      green: "#4DA834",
      grey: "#A0A0A0",
      black: "#000000",
      "primary-text": "#4B4B50",
      "secondary-text": "#8692A6",
      white: "#FFFFFF",
      background: "#F6F6F6",
      "stroke-of-box": "#E6E6E6",
      line: "#E0E5EA",
      placeholder: "#B8B8B8",
      "disable-field": "#F1F2F2",
      modal: "#00000033",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      boxShadow: {
        normal: "0px 6px 13px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        "10px": "10px",
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
      normal: "16px",
      medium: "14px",
      small: "12px",
    },
  },
  plugins: [],
};
