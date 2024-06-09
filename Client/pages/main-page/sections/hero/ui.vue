<script lang="ts" setup>
	import { Button } from "@shared/ui";
</script>

<template>
	<section>
		<div>
			<h2>Maximize skill, minimize budget</h2>
			<p>
				Our modern courses across a range of in-demand skills will give you the knowledge you need
				to live the life you want.
			</p>
			<Button background-color="gradientLight">Get Started</Button>
		</div>
		<div>
			<div>
				<picture>
					<source
						media="(min-width: 1440px)"
						srcset="/images/woman-image-lg.png"
						type="image/png"
					/>
					<source media="(min-width: 768px)" srcset="/images/woman-image-md.png" type="image/png" />
					<source media="(min-width: 375px)" srcset="/images/woman-image-sm.png" type="image/png" />
					<img alt="Image of a woman drinking coffee" src="/images/woman-image-sm.png" />
				</picture>
			</div>
			<dl>
				<dt>Members</dt>
				<dd>29k</dd>
			</dl>
			<dl>
				<dt>Course hours</dt>
				<dd>1,451</dd>
			</dl>
		</div>
	</section>
</template>
