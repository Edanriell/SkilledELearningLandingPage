<script lang="ts" setup>
	import { button, container, header, logotype } from "./styles";
</script>

<template>
	<header :class="header">
		<div :class="container">
			<span :class="logotype">skilled</span>
			<button :class="button" type="button">Get Started</button>
		</div>
	</header>
</template>
