<script lang="ts" setup>
	import { Header } from "@widgets/header";
	import { Footer } from "@widgets/footer";
</script>

<template>
	<main>
		<h1 class="visually-hidden">Company Skilled home page</h1>
		<Header />
		<slot />
		<Footer />
	</main>
</template>
