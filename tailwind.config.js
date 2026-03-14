/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#00d4ff", // Nitrous
  secondary: "#ff4d00", // Signal
  accent: "#ff003c", // Racing Red
  background: "#0d0d0f", // Deep Asphalt
  surface: "#16161a", // Dark Grey
  card: "#1c1c21", // Grey Card
  hover: "#25252b",
  nitrous: {
    50: '#e0faff',
    100: '#b3f2ff',
    200: '#80e9ff',
    300: '#4de0ff',
    400: '#26d9ff',
    500: '#00d4ff',
    600: '#00bfe6',
    700: '#00a6cc',
    800: '#008cb3',
    900: '#006680',
  },
  signal: {
    50: '#fff2e0',
    100: '#ffe0b3',
    200: '#ffcc80',
    300: '#ffb84d',
    400: '#ffa826',
    500: '#ff4d00',
    600: '#e64500',
    700: '#cc3e00',
    800: '#b32a00',
    900: '#801800',
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-racing': 'linear-gradient(135deg, #0d0d0f 0%, #16161a 100%)',
        'nitrous-glow': 'linear-gradient(135deg, rgba(0, 212, 255, 0.4) 0%, rgba(255, 77, 0, 0.4) 100%)',
      },
      boxShadow: {
        'nitrous': '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(255, 77, 0, 0.3)',
        'signal': '0 0 20px rgba(255, 77, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
