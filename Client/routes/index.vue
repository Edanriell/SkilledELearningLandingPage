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
</script>

<template>
	<h1 :class="css({ fontSize: '5xl', fontWeight: 'bold', color: 'red', backgroundColor: 'red' })">
		This is a title
	</h1>
	<MainPage />
</template>
