import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071a36",
        mint: "#089a71",
        emeraldSoft: "#eaf8f3",
        borderSoft: "#e7f0ee",
        navy: "#001f3e",
      },
      boxShadow: {
        dashboard: "0 22px 55px rgba(3, 32, 55, 0.12)",
        card: "0 18px 45px rgba(8, 58, 55, 0.06)",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
