import { css } from "@styled-system/css";

export const CoursesCategories = css({
	background: "linear-gradient(180deg, #fff 0%, #f0f1ff 100%)"
});

export const CoursesCategoriesList = css({
	paddingLeft: "1.6rem",
	paddingRight: "1.6rem",
	paddingBottom: "8rem",
	display: "flex",
	flexDirection: "column",
	rowGap: "4rem",
	md: {
		paddingLeft: "4rem",
		paddingRight: "4rem",
		paddingBottom: "8.6rem",
		flexDirection: "row",
		flexWrap: "wrap",
		rowGap: "5.6rem",
		columnGap: "1rem",
		alignItems: "center",
		justifyContent: "center"
	}
});

export const CoursesCategoriesListItem = css({
	position: "relative",
	md: {
		flex: "1 1"
	}
});

export const CategoryTitleCard = css({
	borderRadius: "1rem",
	background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
	padding: "2.4rem 2.8rem 3.2rem 2.8rem",
	md: {
		padding: "5.6rem 3.2rem 13.9rem 3.2rem",
		width: "100%",
		minWidth: "33rem"
	}
});

export const CategoryMainTitle = css({
	fontFamily: "var(--font-family)",
	fontWeight: "800",
	fontSize: "2.4rem",
	lineHeight: "133%",
	color: "var(--ffffff)"
});

export const CategoryCard = css({
	borderRadius: "1rem",
	boxShadow: "0 25px 50px 0 rgba(6, 22, 141, 0.04)",
	background: "var(--ffffff)",
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	padding: "5.6rem 2.8rem 3.2rem 2.8rem",
	md: {
		padding: "5.6rem 2.2rem 3.2rem 3.2rem",
		width: "100%",
		minWidth: "33rem"
	}
});

export const CategoryCardIcon = css({
	width: "5.6rem",
	height: "5.6rem",
	borderRadius: "100%",
	background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
	position: "absolute",
	top: "-2.4rem",
	left: "2.8rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	md: {
		left: "3.2rem"
	}
});

export const CategoryCardSubtitle = css({
	fontFamily: "var(--font-family)",
	fontWeight: "800",
	fontSize: "2rem",
	color: "var(--13183f)",
	marginBottom: "1.6rem"
});

export const CategoryCardText = css({
	fontFamily: "var(--font-family)",
	fontWeight: "500",
	fontSize: "1.6rem",
	lineHeight: "162%",
	color: "var(--83869a)",
	marginBottom: "2.4rem",
	textAlign: "left"
});

export const CategoryCardButton = css({
	fontFamily: "var(--font-family)",
	fontWeight: "700",
	fontSize: "1.8rem",
	lineHeight: "156%",
	color: "var(--f74780)",
	cursor: "pointer"
});
