/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quadcore: {
          primary: "#13392D",
          accent: "#235C49",
          muted: "#527A6D",
          lightGray: "#94A3B8",
          lightBackground: "#F8F7F1",
          sectionBg: "#F5F3EC",
          bgCard: "#E8F0EA",
          bgIcon: "#E0F2F1",
          hoverText: "#235C4A",
          footerText: "#CED7D0",
        },
      },
    },
  },
  plugins: [],
};
