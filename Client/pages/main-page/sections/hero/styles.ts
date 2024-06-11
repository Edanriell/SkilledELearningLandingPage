import { css } from "@styled-system/css";

export const hero = css({
	backgroundColor: "transparent",
	paddingTop: "2.2rem",
	paddingBottom: "9rem",
	position: "relative",
	zIndex: "1",
	md: {
		paddingTop: "2.6rem",
		paddingBottom: "16.1rem",
		display: "flex",
		flexDirection: "row"
	},
	lg: {
		paddingTop: "6.3rem",
		paddingBottom: "13.4rem",
		justifyContent: "space-between"
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
	},
	lg: {
		paddingLeft: "16.5rem",
		paddingRight: "27rem"
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
	},
	lg: {
		fontSize: "5.6rem",
		marginBottom: "2.9rem"
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
	},
	lg: {
		fontSize: "1.8rem",
		lineHeight: "156%",
		marginBottom: "4rem",
		paddingRight: "1rem"
	}
});

export const heroButtonContainer = css({
	textAlign: "left"
});

export const heroStatistics = css({
	position: "relative",
	md: {
		marginRight: "8.1rem"
	},
	lg: {
		marginRight: "21.9rem"
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
	},
	lg: {
		width: "31.7rem",
		height: "56rem"
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
	},
	lg: {
		width: "31.7rem",
		height: "56rem"
	}
});

export const heroImage = css({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	paddingTop: "1.6rem",
	md: {
		paddingTop: "5.2rem"
	},
	lg: {
		paddingTop: "7.7rem"
	}
});

export const statistics = css({
	padding: "1.6rem 2.1rem",
	display: "flex",
	flexDirection: "column",
	borderRadius: "1rem",
	boxShadow: "0 34px 54px 0 rgba(6, 22, 141, 0.16)",
	background: "var(--ffffff)",
	position: "absolute",
	md: {
		borderRadius: "1.5rem"
	},
	lg: {
		padding: "2rem 2.4rem"
	}
});

export const statisticsFieldName = css({
	fontFamily: "var(--font-family)",
	fontWeight: "700",
	fontSize: "1.4rem",
	lineHeight: "200%",
	color: "var(--83869a)",
	lg: {
		fontSize: "1.6rem",
		lineHeight: "175%"
	}
});

export const statisticsFieldValue = css({
	fontFamily: "var(--font-family)",
	fontWeight: "800",
	fontSize: "3.2rem",
	color: "var(--13183f)",
	lg: {
		fontSize: "4rem"
	}
});

export const statisticsHours = css({
	top: "17.7rem",
	left: "-3.7rem",
	minWidth: "15.5rem",
	md: {
		top: "32rem",
		left: "-4.5rem"
	},
	lg: {
		top: "34.1rem",
		left: "-12.2rem",
		minWidth: "19.9rem"
	}
});

export const statisticsMembers = css({
	top: "-3.8rem",
	right: "-3.8rem",
	md: {
		top: "-1.4rem",
		right: "-5.8rem"
	},
	lg: {
		top: "10.3rem",
		right: "-12.8rem",
		minWidth: "15.5rem"
	}
});

export const decorativeImageMedium = css({
	display: "none",
	position: "absolute",
	zIndex: "-1",
	pointerEvents: "none",
	md: {
		display: "block",
		top: "-17.2rem",
		left: "0"
	},
	lg: {
		display: "none"
	}
});

export const decorativeImageLarge = css({
	display: "none",
	position: "absolute",
	zIndex: "-1",
	pointerEvents: "none",
	lg: {
		display: "block",
		top: "-24.8rem",
		left: "0"
	}
});
