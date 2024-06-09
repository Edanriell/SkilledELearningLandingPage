<script lang="ts" setup>
	import { Button, Logotype } from "@shared/ui";

	import { container, header } from "./styles";
</script>

<template>
	<header :class="header">
		<div :class="container">
			<Logotype text-color="dark">skilled</Logotype>
			<Button background-color="dark">Get Started</Button>
		</div>
	</header>
</template>
