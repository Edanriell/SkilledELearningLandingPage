<script lang="ts" setup>
	import { Button } from "@shared/ui";

	import {
		hero,
		heroButtonContainer,
		heroContent,
		heroImage,
		heroImageContainer,
		heroStatistics,
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
			<div :class="heroImageContainer">
				<picture>
					<source
						media="(min-width: 1440px)"
						srcset="/images/woman-image-lg.png"
						type="image/png"
					/>
					<source media="(min-width: 768px)" srcset="/images/woman-image-md.png" type="image/png" />
					<source media="(min-width: 375px)" srcset="/images/woman-image-sm.png" type="image/png" />
					<img
						:class="heroImage"
						alt="Image of a woman drinking coffee"
						src="/images/woman-image-sm.png"
					/>
				</picture>
				<dl :class="statistics + ' ' + statisticsMembers">
					<dt :class="statisticsFieldName">Members</dt>
					<dd :class="statisticsFieldValue">29k</dd>
				</dl>
				<dl :class="statistics + ' ' + statisticsHours">
					<dt :class="statisticsFieldName">Course hours</dt>
					<dd :class="statisticsFieldValue">1,451</dd>
				</dl>
			</div>
		</div>
	</section>
</template>
