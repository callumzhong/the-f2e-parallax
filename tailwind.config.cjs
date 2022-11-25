/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    lineHeight: {
      normal: "1.25",
      relaxed: "1.4",
      loose: "1.6",
    },
    extend: {
      backgroundImage: {
        "btn-user": "url('@/assets/btn/btn_user.png')",
        "btn-user-hover": "url('@/assets/btn/btn_user_h.png')",
        "btn-user-pressed": "url('@/assets/btn/btn_user_p.png')",
        "btn-burger-open": "url('@/assets/btn/btn_burger_open.png')",
        "btn-burger-open-hover": "url('@/assets/btn/btn_burger_open_h.png')",
        "btn-burger-open-pressed": "url('@/assets/btn/btn_burger_open_p.png')",
        decorate_01: "url('@/assets/bg/bg_decorate_01.png')",
        decorate_02: "url('@/assets/bg/bg_decorate_02.png')",
        decorate_03: "url('@/assets/bg/bg_decorate_03.png')",
        decorate_04: "url('@/assets/bg/bg_decorate_04.png')",
        decorate_05: "url('@/assets/bg/bg_decorate_05.png')",
        decorate_06: "url('@/assets/bg/bg_decorate_06.png')",
        decorate_07: "url('@/assets/bg/bg_decorate_07.png')",
        decorate_08: "url('@/assets/bg/bg_decorate_08.png')",
        decorate_09: "url('@/assets/bg/bg_decorate_09.png')",
        ready_frame: "url('@/assets/main/ready_frame.png')",
        talking_c: "url(@/assets/bg/bg_talking_c.png)",
        talking: "url(@/assets/bg/bg_talking.png)",
        btn_join: "url(@/assets/btn/btn_join.png)",
        btn_join_hover: "url(@/assets/btn/btn_join_h.png)",
        btn_joinHand: "url(@/assets/btn/btn_joinHand.png)",
        btn_sponsor: "url(@/assets/btn/btn_sponsor.png)",
        btn_sponsor_hover: "url(@/assets/btn/btn_sponsor_h.png)",
      },
      colors: {
        primary: {
          DEFAULT: "#007FAB",
          dark: "#003A4F",
          tint: "#B0D2DE",
        },
        secondary: {
          DEFAULT: "#FFC37D",
          dark: "#A46039",
          tint: "#FFE2A9",
        },
        highlight: {
          DEFAULT: "#FF5136",
          dark: "#CD331A",
          tint: "#FFB5A4",
        },
        dark: {
          DEFAULT: "#000000",
          200: "#CCCCCC",
          400: "#999999",
          600: "#666666",
          800: "#333333",
        },
      },
    },
  },
  plugins: [],
};
