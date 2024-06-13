<script lang="ts" setup>
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted, ref } from "vue";

	import { logotype } from "./styles";

	const props = defineProps<{
		textColor: "dark" | "light";
	}>();

	gsap.registerPlugin(ScrollTrigger);

	const logotypeRef = ref(null);

	onMounted(() => {
		gsap.fromTo(
			logotypeRef.value,
			{
				scrollTrigger: logotypeRef.value,
				x: -25,
				opacity: 0
			},
			{
				scrollTrigger: logotypeRef.value,
				x: 0,
				opacity: 1,
				ease: "power1.inOut",
				duration: 0.25
			}
		);
	});
</script>

<template>
	<span ref="logotypeRef" :class="logotype({ textColor: props.textColor })">
		<slot />
	</span>
</template>
