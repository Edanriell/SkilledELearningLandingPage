<script lang="ts" setup>
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted, ref } from "vue";

	import { Button, Logotype } from "@shared/ui";

	import { container, header } from "./styles";

	gsap.registerPlugin(ScrollTrigger);

	const buttonWrapperRef = ref(null);

	onMounted(() => {
		gsap.fromTo(
			buttonWrapperRef.value,
			{
				scrollTrigger: buttonWrapperRef.value,
				x: 25,
				opacity: 0
			},
			{
				scrollTrigger: buttonWrapperRef.value,
				x: 0,
				opacity: 1,
				ease: "power1.inOut",
				duration: 0.25
			}
		);
	});
</script>

<template>
	<header :class="header">
		<div :class="container">
			<Logotype text-color="dark">skilled</Logotype>
			<div ref="buttonWrapperRef">
				<Button background-color="dark">Get Started</Button>
			</div>
		</div>
	</header>
</template>
