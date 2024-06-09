<script lang="ts" setup>
	import { Logotype } from "@shared/ui";

	import { button, container, footer } from "./styles";
</script>

<template>
	<footer :class="footer">
		<div :class="container">
			<Logotype text-color="light">skilled</Logotype>
			<button :class="button" type="button">Get Started</button>
		</div>
	</footer>
</template>
