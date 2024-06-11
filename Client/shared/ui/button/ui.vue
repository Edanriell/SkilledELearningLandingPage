<script lang="ts" setup>
	import gsap from "gsap";
	import { ref } from "vue";

	import { button } from "./styles";

	const props = defineProps<{
		backgroundColor: "dark" | "gradientDark" | "gradientLight" | "basic";
	}>();

	const buttonRef = ref(null);

	const handleMouseUp = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	};

	const handleMouseDown = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	};

	const handleMouseEnter = () => {
		// gsap.set(buttonRef.value, {
		// 	background: "#3d8168"
		// });

		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonRef.value, {
			// background: "#3d8168",
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	};

	const handleTouchStart = () => {
		// gsap.set(buttonRef.value, {
		// 	background: "#3d8168"
		// });

		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});
	};

	const handleTouchEnd = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});
	};
</script>

<template>
	<button
		ref="buttonRef"
		:class="button({ backgroundColor: props.backgroundColor })"
		type="button"
		@mousedown="handleMouseDown"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@mouseup="handleMouseUp"
		@touchend="handleTouchEnd"
		@touchstart="handleTouchStart"
	>
		<slot />
	</button>
</template>
