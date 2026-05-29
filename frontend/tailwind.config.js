/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1326",
        surface: "rgba(255, 255, 255, 0.05)",
        velocity: {
          purple: "#8b5cf6",
          cyan: "#4cd7f6",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
        "neon-cyan": "0 0 20px rgba(76, 215, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
