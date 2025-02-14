import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(180,29%,50%)',
        background: 'hsl(180,52%,96%)',
        'filter-tablets': 'hsl(180,31%,95%)',
        'dark-cyan': 'hsl(180,8%,52%)',
        'v-dark-cyan': 'hsl(180, 14%, 20%)',
      },
      backgroundImage: {
        mobile: "url('/images/bg-header-mobile.svg')",
        desktop: "url('/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config
