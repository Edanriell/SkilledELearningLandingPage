<script lang="ts" setup>
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted, ref } from "vue";

	import { Button, Icon } from "@shared/ui";

	import {
		CategoryCard,
		CategoryCardIcon,
		CategoryCardSubtitle,
		CategoryCardText,
		CategoryMainTitle,
		CategoryTitleCard,
		CoursesCategories,
		CoursesCategoriesList,
		CoursesCategoriesListItem
	} from "./styles";

	gsap.registerPlugin(ScrollTrigger);

	const coursesCategoriesListRef = ref(null);

	onMounted(() => {
		gsap.fromTo(
			(coursesCategoriesListRef.value as unknown as HTMLUListElement).children,
			{
				scrollTrigger: (coursesCategoriesListRef.value as unknown as HTMLUListElement).children,
				y: -25,
				opacity: 0
			},
			{
				scrollTrigger: (coursesCategoriesListRef.value as unknown as HTMLUListElement).children,
				y: 0,
				opacity: 1,
				ease: "power1.inOut",
				duration: 0.25,
				delay: 0.25,
				stagger: 0.15
			}
		);
	});
</script>

<template>
	<section :class="CoursesCategories">
		<ul ref="coursesCategoriesListRef" :class="CoursesCategoriesList">
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryTitleCard">
					<h2 :class="CategoryMainTitle">Check out our most popular courses!</h2>
				</article>
			</li>
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryCard">
					<span :class="CategoryCardIcon">
						<Icon icon-type="animation" />
					</span>
					<h3 :class="CategoryCardSubtitle">Animation</h3>
					<p :class="CategoryCardText">
						Learn the latest animation techniques to create stunning motion design and captivate
						your audience.
					</p>
					<Button background-color="basic">Get Started</Button>
				</article>
			</li>
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryCard">
					<span :class="CategoryCardIcon">
						<Icon icon-type="design" />
					</span>
					<h3 :class="CategoryCardSubtitle">Design</h3>
					<p :class="CategoryCardText">
						Create beautiful, usable interfaces to help shape the future of how the web looks.
					</p>
					<Button background-color="basic">Get Started</Button>
				</article>
			</li>
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryCard">
					<span :class="CategoryCardIcon">
						<Icon icon-type="photography" />
					</span>
					<h3 :class="CategoryCardSubtitle">Photography</h3>
					<p :class="CategoryCardText">
						Explore critical fundamentals like lighting, composition, and focus to capture
						exceptional photos.
					</p>
					<Button background-color="basic">Get Started</Button>
				</article>
			</li>
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryCard">
					<span :class="CategoryCardIcon">
						<Icon icon-type="crypto" />
					</span>
					<h3 :class="CategoryCardSubtitle">Crypto</h3>
					<p :class="CategoryCardText">
						All you need to know to get started investing in crypto. Go from beginner to advanced
						with this 54 hour course.
					</p>
					<Button background-color="basic">Get Started</Button>
				</article>
			</li>
			<li :class="CoursesCategoriesListItem">
				<article :class="CategoryCard">
					<span :class="CategoryCardIcon">
						<Icon icon-type="business" />
					</span>
					<h3 :class="CategoryCardSubtitle">Business</h3>
					<p :class="CategoryCardText">
						A step-by-step playbook to help you start, scale, and sustain your business without
						outside investment.
					</p>
					<Button background-color="basic">Get Started</Button>
				</article>
			</li>
		</ul>
	</section>
</template>
