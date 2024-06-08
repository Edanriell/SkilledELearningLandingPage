import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./layouts/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./routes/**/*.{js,jsx,ts,tsx}",
		"./shared/**/*.{js,jsx,ts,tsx}",
		"./widgets/**/*.{js,jsx,ts,tsx}"
	],
	// syntax: "template-literal",
	// jsxFramework: "vue",
	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: "styled-system"
});
