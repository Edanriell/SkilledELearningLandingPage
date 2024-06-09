<script lang="ts" setup>
	import { Button, Logotype } from "@shared/ui";

	import { container, footer } from "./styles";
</script>

<template>
	<footer :class="footer">
		<div :class="container">
			<Logotype text-color="light">skilled</Logotype>
			<Button background-color="gradientDark">Get Started</Button>
		</div>
	</footer>
</template>
