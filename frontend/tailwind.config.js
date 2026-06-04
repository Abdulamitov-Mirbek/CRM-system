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
        background: "#0f172a",
        surface: "rgba(15, 23, 42, 0.8)",
        crm: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          accent: "#06b6d4",
          success: "#10b981",
          warning: "#f59e0b",
          danger: "#ef4444",
        },
        daamda: {
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
        "gradient-crm": "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      },
      boxShadow: {
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
        "neon-cyan": "0 0 20px rgba(76, 215, 246, 0.3)",
        "card": "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.06)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
