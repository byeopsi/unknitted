/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      /* 스와이프 애니메이션 */
      keyframes: {
        swipe: {
          "0%, 20%": { transform: "translateX(0%)" }, // 1
          "25%, 45%": { transform: "translateX(-100%)" }, // 2
          "50%, 70%": { transform: "translateX(-200%)" }, // 3
          "75%, 95%": { transform: "translateX(-300%)" }, // 4
          "100%": { transform: "translateX(-400%)" }, // 1(복제)로 이동
        },
      },
      animation: {
        swipe: "swipe 20s infinite",
      },
      /* 스와이프 애니메이션 끝 */
    },
  },
  plugins: [],
};
