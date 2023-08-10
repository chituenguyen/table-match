/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Uniscore: ["UniscoreSans"],
      },
      colors: {
        "basic": "#555",
        "rega-blue": "#2187E5",
        "surface-1": "rgba(229, 233, 239, 0.4);",
        "surface-2": "#22222673",
        "surface-3":"rgba(34, 34, 38, 0.15)"
      },
      fontSize: {
        xsm: "13px",
      },
      lineHeight: {
        smc: "0.875rem", // Custom line height for class 'line-14'
      },
      boxShadow: {
        custom: "0 1px 8px 2px rgba(34, 34, 38, 0.08)", // Add your custom box shadow here
      },
    },
    keyframes: {
      shimmer: {
        '100%' : {transform: 'translateX(100%)'}
      }
    }
  },
  plugins: [],
};
