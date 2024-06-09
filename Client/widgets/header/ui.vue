<script lang="ts" setup>
	import { Logotype } from "@shared/ui";

	import { button, container, header } from "./styles";
</script>

<template>
	<header :class="header">
		<div :class="container">
			<Logotype text-color="dark">skilled</Logotype>
			<button :class="button" type="button">Get Started</button>
		</div>
	</header>
</template>
