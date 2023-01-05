/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				md: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
			},
			fontFamily: {
				ibm: ['IBM Plex Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
