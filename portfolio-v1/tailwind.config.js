// colors = require('./tailwindcolors.js');
// allColors = require('./tailwindcolors.js');
const colors = require("tailwindcss/colors");
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	// purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "current",
				black: colors.black,
				blueGray: colors.blueGray,
				coolGray: colors.coolGray,
				gray: colors.gray,
				trueGray: colors.trueGray,
				warmGray: colors.warmGray,
				red: colors.red,
				orange: colors.orange,
				amber: colors.amber,
				yellow: colors.yellow,
				lime: colors.lime,
				green: colors.green,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				blue: colors.blue,
				indigo: colors.indigo,
				violet: colors.violet,
				purple: colors.purple,
				fuchsia: colors.fuchsia,
				pink: colors.pink,
				rose: colors.rose,
			},
		},
		boxShadow: {
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			DEFAULT:
				"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
			xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
			"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
			"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			none: "none",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
