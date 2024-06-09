<script lang="ts" setup>
	import { button, container, footer, logotype } from "./styles";
</script>

<template>
	<footer :class="footer">
		<div :class="container">
			<span :class="logotype">skilled</span>
			<button :class="button" type="button">Get Started</button>
		</div>
	</footer>
</template>
