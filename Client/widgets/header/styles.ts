import { css } from "@styled-system/css";

export const header = css({
	backgroundColor: "transparent",
	zIndex: "2",
	position: "relative"
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
