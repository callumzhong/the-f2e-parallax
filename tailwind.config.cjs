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
      fontSize: {
        "mobile-h1": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.5rem",
            letterSpacing: "0.05em",
          },
        ],
        "mobile-h2": [
          "1.75rem",
          {
            fontWeight: "700",
            lineHeight: "2.25rem",
            letterSpacing: "0.05em",
          },
        ],
        "mobile-h3": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "0.05em",
          },
        ],
        "mobile-h4": [
          "1.25rem",
          {
            fontWeight: "700",
            lineHeight: "1.75rem",
            letterSpacing: "0.05em",
          },
        ],
        "mobile-h5": [
          "1.125rem",
          {
            fontWeight: "700",
            lineHeight: "1.75rem",
            letterSpacing: "0.05em",
          },
        ],
        "mobile-highlight": [
          "1.125rem",
          {
            fontWeight: "700",
            lineHeight: "1.5rem",
            letterSpacing: "0.05em",
          },
        ],
        "desktop-h1": [
          "2rem",
          {
            fontWeight: "700",
            lineHeight: "2.5rem",
            letterSpacing: "0.02em",
          },
        ],
        "desktop-h2": [
          "3.75rem",
          {
            fontWeight: "700",
            lineHeight: "4.75rem",
            letterSpacing: "0.02em",
          },
        ],
        "desktop-h3": [
          "2.75rem",
          {
            fontWeight: "700",
            lineHeight: "3.5rem",
            letterSpacing: "0.02em",
          },
        ],
        "desktop-h4": [
          "2rem",
          {
            fontWeight: "700",
            lineHeight: "2.75rem",
            letterSpacing: "0.02em",
          },
        ],
        "desktop-h5": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "0.02em",
          },
        ],
        "desktop-highlight": [
          "1.5rem",
          {
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "0.02em",
          },
        ],
      },
      backgroundImage: {
        btn_sponsor: "url(@/assets/btn/btn_sponsor.png)",
        btn_sponsor_hover:
          "url(@/assets/btn/btn_sponsor_h.png)",
        "btn-burger-open":
          "url(@/assets/btn/btn_burger_open.png)",
        "btn-burger-open-hover":
          "url(@/assets/btn/btn_burger_open_h.png)",
        "btn-burger-open-pressed":
          "url(@/assets/btn/btn_burger_open_p.png)",
        "btn-burger-close":
          "url(@/assets/btn/btn_burger_close.png)",
        "btn-burger-close-hover":
          "url(@/assets/btn/btn_burger_close_h.png)",
        "btn-burger-close-pressed":
          "url(@/assets/btn/btn_burger_close_p.png)",
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
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
        },
      },
      animation: {
        "bounce-small": "bounce-small 1s infinite",
      },
      keyframes: {
        "bounce-small": {
          "0%, 100%": {
            transform: "translateY(-15%)",
            "animation-timing-function":
              "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function":
              "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
};
