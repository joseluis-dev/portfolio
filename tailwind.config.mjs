/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'clamp-lg': 'clamp(40px, 7.8vw, 80px)',
				'clamp-md': 'clamp(20px, 5.8vw, 50px)',
			}
		},
	},
	plugins: [],
}
