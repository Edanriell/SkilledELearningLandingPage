<script lang="ts" setup>
	import { MainPage } from "@pages";
	import { css } from "styled-system/css";

	useSeoMeta({
		title: "FAQs",
		ogTitle: "FAQs",
		description: "Frequently asked questions about Frontend Mentor.",
		ogDescription: "Frequently asked questions about Frontend Mentor."
	});

	definePageMeta({
		layout: "main-layout-ui"
	});

	const styles = css({
		backgroundColor: "gainsboro",
		borderRadius: "9999px",
		fontSize: "13px",
		padding: "10px 15px"
	});
</script>

<template>
	<h1>This is a title</h1>
	<h3 :class="styles">TEST</h3>
	<MainPage />
</template>
