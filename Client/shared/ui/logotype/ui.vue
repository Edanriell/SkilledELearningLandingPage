<script lang="ts" setup>
	import { logotype } from "./styles";

	const props = defineProps<{
		textColor: "dark" | "light";
	}>();
</script>

<template>
	<span :class="logotype({ textColor: props.textColor })">
		<slot />
	</span>
</template>
