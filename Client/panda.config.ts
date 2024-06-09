import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,
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
		extend: {
			breakpoints: {
				sm: "375px",
				md: "768px",
				lg: "1440px"
			}
		}
	},

	// The output directory for your css system
	outdir: "styled-system"
});
