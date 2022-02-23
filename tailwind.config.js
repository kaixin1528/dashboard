module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        sidebar: "#4e535d",
        search: "#cbced2",
        illustrator: "#c07115",
        arrow: "#ac98d0",
        design: "#987cc9",
        lightroom: "#369fe6",
        sketch: "#aca7ff",
      },
      backgroundColor: {
        sidebar: "#161b25",
        main: "#eff3f7",
        hover: "#3b4147",
        search: "#f1f5f9",
        newSpace: "#f1f5f9",
        illustrator: "#310001",
        design: "#ece0f9",
        lightroom: "#001e36",
        sketch: "#5e32b4",
      },
      backgroundImage: {
        art: "url('./design.jpeg')",
      },
    },
  },
  plugins: [],
};
