/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			gridTemplateColumns: {
				categories: "repeat(auto-fit,minmax(18rem,1fr))",
				playlists: "repeat(auto-fit,minmax(25rem,1fr))",
			},
			spacing: {
				banner: "32rem",
				100: "25rem",
				0.5: "0.1rem",
				1.5: ".35rem",
			},
			boxShadow: {
				footer: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)",
				card: "0px 0px 8px 0px rgba(0, 0, 0, 0.3)",
			},
		},
		plugins: [],
	},
};
