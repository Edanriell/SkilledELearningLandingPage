<script lang="ts" setup>
	import { Header } from "@widgets/header";
	import { Footer } from "@widgets/footer";

	import { main } from "./styles";
</script>

<template>
	<main :class="main">
		<h1 class="visually-hidden">Company Skilled home page</h1>
		<Header />
		<slot />
		<Footer />
	</main>
</template>
