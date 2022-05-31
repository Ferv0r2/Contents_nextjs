const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0d0222",
        boxTop: "#1a001f",
        boxBottom: "#280034",
        btnTop: "#83187f",
        btnBottom: "#490b53",
        areaPurple: "#190021",
        bar: "#6b337c",
        tableBg: "#380947",
        tableBar: "#6b337c",
        tableText: "#d49eff",
        modalTop: "#220127",
        modalBottom: "#490b53",
        modalBorder: "#7e5486",
        modalContent: "#752f80",
        modalBtn: "#dfcce4",
        modalBtnBorder: "#26003a",
        miningBg: "#130223",
        miningBtnBg: "#322543",
        miningBtnHover: "#94889e",
        light_gray: "#b5b2bc",
        hover_pink: "#d52e82",
        top_gray: "#a3a3a3",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubbleGum: "#ff77e9",
        bermuda: "#78dcca",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      left: {
        "-16": "-4rem",
      },
      right: {
        "-16": "-4rem",
      },
      minHeight: {
        "1/2": "50%",
        halfScreen: "70vh",
      },
      animation: {
        show: "modalShow 0.3s",
        showInfinity: "modalShow 1s infinite alternate",
        showDisplay: "itemShow 0.5s",
        boxFlicker: "flicker 1.5s infinite alternate",
      },
      keyframes: {
        modalShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        itemShow: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        flicker: {
          "0%, 18%, 22%,100%": {
            "box-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #cf00cf, 0 0 80px #cf00cf, 0 0 90px #cf00cf, 0 0 100px #cf00cf, 0 0 150px #cf00cf",
          },
          "55%": {
            "box-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #cf00cf, 0 0 40px #cf00cf, 0 0 45px #cf00cf, 0 0 50px #cf00cf, 0 0 75px #cf00cf",
          },
        },
      },
      animationDelay: {
        3000: "3000ms",
      },
    },
  },
  variants: {
    animationFillMode: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
};