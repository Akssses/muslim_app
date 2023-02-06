module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "510px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      }
    },

    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "#D3E3FC",
          "900": "#77A6F7",
          "dark": "var(--primary-dark)",
        },
        danger: {
          "50": "var(--danger-50)",
          "100": "var(--danger-100)",
          "200": "var(--danger-200)",
          "300": "var(--danger-300)",
          "400": "var(--danger-400)",
          "500": "var(--danger-500)",
          "600": "var(--danger-600)",
          "700": "var(--danger-700)",
          "800": "var(--danger-800)",
          "900": "var(--danger-900)"
        },
      },
      variables: {
        DEFAULT: {
          primary: {
            "500": "#77A6F7",
            "800": "#D3E3FC",
            "900": "#77A6F7",
            "dark": "#03130b",
            "white": "#fff"
          },
          danger: {
            "50": "#FEE2E2",
            "100": "#FECACA",
            "200": "#FCA5A5",
            "300": "#F87171",
            "400": "#F87171",
            "500": "#EF4444",
            "600": "#B91C1C",
            "700": "#991B1B",
            "800": "#7F1D1D",
            "900": "#DC2626",
          }
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
  ],
}
