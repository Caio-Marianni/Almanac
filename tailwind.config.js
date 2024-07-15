/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx  }",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 2s ease-in-out infinite",
      },
      keyframes:{
        move: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-120%)",
          },
        },
      },
    },
    colors: {
      red: '#ff0000',
      red500: '#631f1f',
      redDark: '#1f0000',
      redLight: '#fff2f2',
      txt500red: '#ebcece',
      white: '#ffffff',
      txt500: '#b3b3b3',
      offWhite: '#bfbfbf',
      black: '#000000',
      black800: '#232323',
      offBlack: '#1B1C1E',
      blue: 'rgba(2, 13, 44, 0.45)',
      transparent: 'rgba(0, 0, 0, 0.3)',
    }
  },
  plugins: [],
}
