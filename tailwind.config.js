/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      /* 스와이프 애니메이션 */
      keyframes: {
        swipe: {
          "0%, 25%": { transform: "translateX(0%)" },
          "33%": { transform: "translateX(-100%)" },
          "58%": { transform: "translateX(-100%)" },
          "66%": { transform: "translateX(-200%)" },
          "91%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        swipe: "swipe 12s ease-in-out infinite",
      },
      /* 스와이프 애니메이션 끝 */
    },
  },
  plugins: [],
};
