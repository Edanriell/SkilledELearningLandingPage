import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Where to look for your css declarations
	include: [
		"./app/**/*.{js,ts,vue}",
		"./layouts/**/*.{js,ts,vue}",
		"./pages/**/*.{js,ts,vue}",
		"./routes/**/*.{js,ts,vue}",
		"./shared/**/*.{js,ts,vue}",
		"./widgets/**/*.{js,ts,vue}"
	],
	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: "styled-system"
});
