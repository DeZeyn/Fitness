module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "2.25rem",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    extend: {
      colors: {
        dark: "#202430",
        medium: "#3A4151",
        white: "#FBFBFB",
      },
      backgroundImage: {
        rose: "linear-gradient(-45deg, #FF99C3, #FFD162)",
        green: "linear-gradient(-45deg, #F5FFA0, #3EF3E8)",
        blue: "linear-gradient(-45deg, #3A4AE4, #3B85E6, #3EE4E8, #3EF3E8)",
      },
      fontFamily: {
        font: ["Poppins"],
      },
    },
  },
  plugins: [],
};
