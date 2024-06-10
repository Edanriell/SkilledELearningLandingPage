import { css } from "@styled-system/css";

export const hero = css({
	backgroundColor: "var(--ffffff)",
	paddingTop: "2.2rem",
	paddingBottom: "9rem",
	md: {
		paddingTop: "2.6rem",
		paddingBottom: "13.7rem",
		display: "flex",
		flexDirection: "row"
	}
});

export const heroContent = css({
	backgroundColor: "var(--ffffff)",
	paddingLeft: "1.6rem",
	paddingRight: "1.6rem",
	marginBottom: "7rem",
	md: {
		paddingLeft: "4rem",
		paddingRight: "3.3rem",
		marginBottom: "unset"
	}
});

export const heroTitle = css({
	fontFamily: "var(--font-family)",
	fontWeight: "800",
	fontSize: "4rem",
	color: "var(--13183f)",
	marginBottom: "2.6rem",
	md: {
		marginBottom: "2.5rem"
	}
});

export const heroText = css({
	fontFamily: "var(--font-family)",
	fontWeight: "500",
	fontSize: "1.6rem",
	lineHeight: "162%",
	color: "var(--83869a)",
	marginBottom: "2.4rem",
	md: {
		textAlign: "left"
	}
});

export const heroButtonContainer = css({
	textAlign: "left"
});

export const heroStatistics = css({
	position: "relative",
	md: {
		marginRight: "8.1rem"
	}
});

export const heroStatisticsImage = css({
	position: "relative",
	display: "block",
	margin: "0 auto",
	width: "25.3rem",
	height: "25.3rem",
	zIndex: "1",
	md: {
		margin: "unset",
		width: "21.6rem",
		height: "38.2rem"
	}
});

export const heroImageContainer = css({
	position: "relative",
	borderRadius: "15.8rem",
	width: "25.3rem",
	height: "25.3rem",
	overflow: "hidden",
	background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
	md: {
		width: "21.6rem",
		height: "38.2rem"
	}
});

export const heroImage = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	paddingTop: "1.6rem",
	md: {
		paddingTop: "5.2rem"
	}
});

export const statistics = css({
	padding: "1.6rem 2.1rem",
	display: "flex",
	flexDirection: "column",
	borderRadius: "1rem",
	boxShadow: "0 34px 54px 0 rgba(6, 22, 141, 0.16)",
	background: "var(--ffffff)",
	position: "absolute"
});

export const statisticsFieldName = css({
	fontFamily: "var(--font-family)",
	fontWeight: "700",
	fontSize: "1.4rem",
	lineHeight: "200%",
	color: "var(--83869a)"
});

export const statisticsFieldValue = css({
	fontFamily: "var(--font-family)",
	fontWeight: "800",
	fontSize: "3.2rem",
	color: "var(--13183f)"
});

export const statisticsHours = css({
	top: "17.7rem",
	left: "-3.7rem",
	minWidth: "15.5rem",
	md: {
		top: "32rem",
		left: "-4.5rem"
	}
});

export const statisticsMembers = css({
	top: "-3.8rem",
	right: "-3.8rem",
	md: {
		top: "-1.4rem",
		right: "-5.8rem"
	}
});

export const decorativeImage = css({
	display: "none",
	position: "absolute",
	zIndex: "-1",
	md: {
		display: "block",
		top: "-17.2rem",
		left: "0"
	}
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
