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
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1.05,
			ease: "power2"
		});

		if (props.backgroundColor === "dark") {
			gsap.set(buttonRef.value, {
				background: "#13183f"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "#666ca3",
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientLight") {
			gsap.set(buttonRef.value, {
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
				opacity: 0.5,
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientDark") {
			gsap.set(buttonRef.value, {
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)",
				opacity: 0.5,
				ease: "power2"
			});
		} else if (props.backgroundColor === "basic") {
			gsap.set(buttonRef.value, {
				color: "#f74780"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				color: "#ffa7c3",
				ease: "power2"
			});
		}
	};

	const handleMouseLeave = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});

		if (props.backgroundColor === "dark") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "#13183f",
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientLight") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
				opacity: 1,
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientDark") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)",
				opacity: 1,
				ease: "power2"
			});
		} else if (props.backgroundColor === "basic") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				color: "#f74780",
				ease: "power2"
			});
		}
	};

	const handleTouchStart = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 0.95,
			ease: "power2"
		});

		if (props.backgroundColor === "dark") {
			gsap.set(buttonRef.value, {
				background: "#13183f"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "#666ca3",
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientLight") {
			gsap.set(buttonRef.value, {
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
				opacity: 0.5,
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientDark") {
			gsap.set(buttonRef.value, {
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)",
				opacity: 0.5,
				ease: "power2"
			});
		} else if (props.backgroundColor === "basic") {
			gsap.set(buttonRef.value, {
				color: "#f74780"
			});

			gsap.to(buttonRef.value, {
				duration: 0.25,
				color: "#ffa7c3",
				ease: "power2"
			});
		}
	};

	const handleTouchEnd = () => {
		gsap.to(buttonRef.value, {
			duration: 0.25,
			scale: 1,
			ease: "power2"
		});

		if (props.backgroundColor === "dark") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "#13183f",
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientLight") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				opacity: 1,
				background: "linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)",
				ease: "power2"
			});
		} else if (props.backgroundColor === "gradientDark") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				background: "linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)",
				opacity: 1,
				ease: "power2"
			});
		} else if (props.backgroundColor === "basic") {
			gsap.to(buttonRef.value, {
				duration: 0.25,
				color: "#f74780",
				ease: "power2"
			});
		}
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
