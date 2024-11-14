/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",

      // New colors
      red: "#ff4d4d",
      black: "#000000",
      white: "#ffffff",
      brown: "#a52a2a",
      "brown-light": "#d2b48c",
      "brown-dark": "#654321",
      beige: "#f5f5dc",
      "blue-dark": "#0056b3",
      "blue-light": "#a3d8ff",
      "green-light": "#b0e57c",
      "green-dark": "#006400",
      "orange-dark": "#cc5500",
      "orange-light": "#ffd280",
      "pink-light": "#ffccff",
      "purple-light": "#dcd0ff",
      "red-light": "#ff9999",
      "yellow-light": "#fff8b3",
      "yellow-dark": "#b8860b",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
}

///** @type {import('tailwindcss').Config} */
//export default {
//  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}
