<script lang="ts" setup>
	import { Button } from "@shared/ui";

	import {
		decorativeImage,
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
</script>

<template>
	<section :class="hero">
		<div :class="heroContent">
			<h2 :class="heroTitle">Maximize skill, minimize budget</h2>
			<p :class="heroText">
				Our modern courses across a range of in-demand skills will give you the knowledge you need
				to live the life you want.
			</p>
			<div :class="heroButtonContainer">
				<Button background-color="gradientLight">Get Started</Button>
			</div>
		</div>
		<div :class="heroStatistics">
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
					:class="decorativeImage"
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
			</div>
		</div>
	</section>
</template>
