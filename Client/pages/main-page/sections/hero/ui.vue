<script lang="ts" setup>
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted, ref } from "vue";

	import { Button } from "@shared/ui";

	import {
		decorativeImageLarge,
		decorativeImageMedium,
		hero,
		heroButtonContainer,
		heroContent,
		heroImage,
		heroImageContainer,
		heroStatistics,
		heroStatisticsImage,
		heroText,
		heroTitle,
		statistics,
		statisticsFieldName,
		statisticsFieldValue,
		statisticsHours,
		statisticsMembers
	} from "./styles";

	gsap.registerPlugin(ScrollTrigger);

	const heroContentRef = ref(null);
	const heroStatisticsRef = ref(null);

	onMounted(() => {
		gsap.fromTo(
			heroContentRef.value,
			{
				scrollTrigger: heroContentRef.value,
				x: -25,
				opacity: 0
			},
			{
				scrollTrigger: heroContentRef.value,
				x: 0,
				opacity: 1,
				ease: "power1.inOut",
				duration: 0.25,
				delay: 0.25
			}
		);

		gsap.fromTo(
			heroStatisticsRef.value,
			{
				scrollTrigger: heroStatisticsRef.value,
				x: 25,
				opacity: 0
			},
			{
				scrollTrigger: heroStatisticsRef.value,
				opacity: 1,
				x: 0,
				ease: "power1.inOut",
				duration: 0.25,
				delay: 0.25
			}
		);
	});
</script>

<template>
	<section :class="hero">
		<div ref="heroContentRef" :class="heroContent">
			<h2 :class="heroTitle">Maximize skill, minimize budget</h2>
			<p :class="heroText">
				Our modern courses across a range of in-demand skills will give you the knowledge you need
				to live the life you want.
			</p>
			<div :class="heroButtonContainer">
				<Button background-color="gradientLight">Get Started</Button>
			</div>
		</div>
		<div ref="heroStatisticsRef" :class="heroStatistics">
			<div :class="heroStatisticsImage">
				<div :class="heroImageContainer">
					<picture>
						<source
							media="(min-width: 1440px)"
							srcset="/images/woman-image-lg.png"
							type="image/png"
						/>
						<source
							media="(min-width: 768px)"
							srcset="/images/woman-image-md.png"
							type="image/png"
						/>
						<source
							media="(min-width: 375px)"
							srcset="/images/woman-image-sm.png"
							type="image/png"
						/>
						<img
							:class="heroImage"
							alt="Image of a woman drinking coffee"
							src="/images/woman-image-sm.png"
						/>
					</picture>
				</div>
				<dl :class="statistics + ' ' + statisticsMembers">
					<dt :class="statisticsFieldName">Members</dt>
					<dd :class="statisticsFieldValue">29k</dd>
				</dl>
				<dl :class="statistics + ' ' + statisticsHours">
					<dt :class="statisticsFieldName">Course hours</dt>
					<dd :class="statisticsFieldValue">1,451</dd>
				</dl>
				<svg
					:class="decorativeImageMedium"
					fill="none"
					height="552"
					viewBox="0 0 552 552"
					width="552"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clip-rule="evenodd"
						d="M366.325 32.5585C408.607 -9.72362 477.159 -9.72359 519.442 32.5585C561.724 74.8406 561.724 143.393 519.442 185.675L185.675 519.442C143.393 561.724 74.8406 561.724 32.5585 519.442C-9.72355 477.159 -9.72358 408.607 32.5585 366.325L366.325 32.5585Z"
						fill="url(#paint0_linear_0_146)"
						fill-rule="evenodd"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_146"
							gradientUnits="userSpaceOnUse"
							x1="442.883"
							x2="-44"
							y1="-44"
							y2="442.883"
						>
							<stop stop-color="#4851FF" />
							<stop offset="1" stop-color="#F02AA6" />
						</linearGradient>
					</defs>
				</svg>
				<svg
					:class="decorativeImageLarge"
					fill="none"
					height="807"
					viewBox="0 0 807 807"
					width="807"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						fill="url(#paint0_linear_0_540)"
						height="1008"
						rx="158.5"
						transform="rotate(45 647.764 -65)"
						width="317"
						x="647.764"
						y="-65"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_0_540"
							gradientUnits="userSpaceOnUse"
							x1="647.764"
							x2="647.764"
							y1="-65"
							y2="943"
						>
							<stop stop-color="#4851FF" />
							<stop offset="1" stop-color="#F02AA6" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	</section>
</template>
