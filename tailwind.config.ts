import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'grey-superlight': "#4a4a4a",
        'grey-light': "#292929",
        'grey-medium': "#1e1e1e",
        'grey-dark': "#0c0c0c"
      },
    },
  },
  plugins: [],
};
export default config;
