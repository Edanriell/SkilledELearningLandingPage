import { cva } from "@styled-system/css";

export const button = cva({
	base: {
		fontFamily: "var(--font-family)",
		fontWeight: "700",
		fontSize: "1.6rem",
		cursor: "pointer",
		lg: {
			fontSize: "1.8rem",
			lineHeight: "156%"
		}
	},
	variants: {
		backgroundColor: {
			dark: {
				lineHeight: "175%",
				borderRadius: "2.8rem",
				padding: "0.9rem 2.4rem 1.1rem 2.4rem",
				color: "var(--ffffff)",
				backgroundColor: "var(--13183f)",
				lg: {
					padding: "1.2rem 3.2rem 1.4rem 3.2rem"
				}
			},
			gradientDark: {
				lineHeight: "175%",
				borderRadius: "2.8rem",
				padding: "0.9rem 2.4rem 1.1rem 2.4rem",
				color: "var(--ffffff)",
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)",
				lg: {
					padding: "1.2rem 3.2rem 1.4rem 3.2rem"
				}
			},
			gradientLight: {
				lineHeight: "162%",
				borderRadius: "3.1rem",
				padding: "1.3rem 3.8rem 1.5rem 3.8rem",
				color: "var(--ffffff)",
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
				lg: {
					padding: "1.6rem 3.2rem 1.9rem 3.2rem"
				}
			},
			basic: {
				fontSize: "1.8rem",
				lineHeight: "156%",
				color: "var(--f74780)"
			}
		}
	}
});
