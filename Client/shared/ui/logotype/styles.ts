import { cva } from "@styled-system/css";

export const logotype = cva({
	base: {
		fontFamily: "var(--font-family)",
		fontWeight: "800",
		fontSize: "2.8rem",
		textTransform: "lowercase",
		lg: {
			fontSize: "3.6rem"
		}
	},
	variants: {
		textColor: {
			dark: { color: "var(--13183f)" },
			light: { color: "var(--ffffff)" }
		}
	}
});
