import { css } from "@styled-system/css";

export const footer = css({
	backgroundColor: "var(--13183f)"
});

export const container = css({
	padding: "3.6rem 1.6rem",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	md: {
		padding: "3.6rem 4rem"
	},
	lg: {
		padding: "3.2rem 16.5rem"
	}
});
