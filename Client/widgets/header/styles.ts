import { css } from "@styled-system/css";

export const header = css({
	backgroundColor: "var(--ffffff)"
});

export const container = css({
	padding: "1.6rem 1.6rem",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	md: {
		padding: "2.4rem 4rem"
	},
	lg: {
		padding: "2.4rem 16.5rem"
	}
});

export const button = css({
	backgroundColor: "var(--13183f)",
	borderRadius: "2.8rem",
	fontFamily: "var(--font-family)",
	fontWeight: "700",
	fontSize: "1.6rem",
	lineHeight: "175%",
	color: "var(--ffffff)",
	padding: "0.9rem 2.4rem 1.1rem 2.4rem",
	cursor: "pointer",
	lg: {
		fontSize: "1.8rem",
		lineHeight: "156%",
		padding: "1.2rem 3.2rem 1.4rem 3.2rem"
	}
});
