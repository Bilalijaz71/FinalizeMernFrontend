/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        meansweb: ['"Means Web",Georgia,Times,"Times New Roman",serif'],
        garikweb: [
          '"Graphik Web","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif',
        ],
      },
      fontSize: {
        "2.5xl": ["1.75rem", { lineHeight: "2.75rem" }],
        small: ["14px", { lineHeight: "24px" }],
      },

      keyframes: {
        spin_word: {
          "10%": {
            transform: "translateY(-112%)",
          },

          "25%": {
            transform: "translateY(-110%)",
          },

          "35%": {
            transform: "translateY(-212%)",
          },

          "50%": {
            transform: "translateY(-210%)",
          },

          "60%": {
            transform: "translateY(-312%)",
          },

          "75%": {
            transform: "translateY(-310%)",
          },

          "85%": {
            transform: "translateY(-412%)",
          },

          "100%": {
            transform: "translateY(-410%)",
          },
        },
        box: {
          "0%": {
            transform: "translateX(0px)",
          },

          "51%": {
            transform: "translateX(20px)",
            opacity: "1",
          },

          "52%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },

          "53%": {
            opacity: "0",
          },

          "54%": {
            opacity: "1",
          },

          "100%": {
            transform: "translateX(0px)",
          },
        },
      },

      animation: {
        box: "box ease-out 0.5s",
        spin_word: "spin_word 6s infinite",
      },
    },
  },

  plugins: [],
};
