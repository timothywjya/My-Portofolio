import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // TAMBAHKAN BARIS INI
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}

export default config;