/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
