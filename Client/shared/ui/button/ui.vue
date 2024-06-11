<script lang="ts" setup>
	import { button } from "./styles";

	const props = defineProps<{
		backgroundColor: "dark" | "gradientDark" | "gradientLight" | "basic";
	}>();
</script>

<template>
	<button :class="button({ backgroundColor: props.backgroundColor })" type="button">
		<slot />
	</button>
</template>
