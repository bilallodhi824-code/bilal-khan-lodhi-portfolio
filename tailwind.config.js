/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Requested Palette: Burgundy + Charcoal + White + Royal Blue
        charcoal: {
          DEFAULT: "#0C0D12",
          base: "#0C0D12",
          surface: "#14151D",
          elevated: "#1C1E29",
          card: "#12131A",
        },
        burgundy: {
          DEFAULT: "#9B1B30",
          deep: "#800020",
          wine: "#6B1020",
          vibrant: "#BE123C",
          light: "#E11D48",
          glow: "rgba(155, 27, 48, 0.3)",
        },
        royal: {
          DEFAULT: "#2563EB",
          deep: "#1D4ED8",
          navy: "#1E3A8A",
          vibrant: "#3B82F6",
          light: "#60A5FA",
          glow: "rgba(37, 99, 235, 0.3)",
        },
        // Backward compatibility mappings seamlessly themed to the new palette:
        ink: "#0C0D12",
        "brand-orange": "#9B1B30", // maps orange to royal burgundy
        "brand-blue": "#2563EB",   // maps blue to electric royal blue
        brand: {
          orange: "#9B1B30",
          blue: "#2563EB",
          burgundy: "#9B1B30",
          royal: "#2563EB",
          charcoal: "#0C0D12",
        },
      },
      fontFamily: {
        sans: ['"Geist Variable"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono Variable"', "ui-monospace", "monospace"],
      },
      screens: {
        xs: "480px",
        wide: "1280px",
      },
    },
  },
  plugins: [],
};
