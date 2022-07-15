/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./js/components/**/*.{js,ts,jsx,tsx}",
    "./stories/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-2xl": "1440px",
      },
      minWidth: {
        "20": "5rem" // 80px
      },
      height: {
        120: '30rem', // 480px
        // 140: '35rem', // 560px
      }
    },
    screens: {
			'2xl': {'max': '1440px',},
			'xl': {'max': '1250px',},
			'lg': {'max': '1024px',},
			'md': {'max': '769px',},
			'sm': {'max': '500px',},
		},
  },
  plugins: [],
}
