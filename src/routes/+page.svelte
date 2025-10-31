<script lang="ts">
	import { onMount } from 'svelte';
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { items as allProjects } from '@data/projects';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !isBlank(email) && reg.test(email);
	};

	const featuredProjects = allProjects.slice(0, 3);

	let inView = false;
	let projectSection: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						inView = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (projectSection) observer.observe(projectSection);
	});
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<!-- 🟩 HERO / LANDING SECTION -->
<section
	class="min-h-screen flex flex-col md:flex-row justify-center lg:justify-between items-center p-10"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left">{name} {lastName},</MainTitle>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>

		<!-- Social Links -->
		<div class="row justify-center md:justify-start py-4 gap-3">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'22px'} />
				</a>
			{/each}
		</div>
	</div>

	<!-- Skills Carousel -->
	<Carrousel items={skills ?? skillsItems} />
</section>

<!-- 🟦 PROJECTS SCROLL SECTION -->
<section
	bind:this={projectSection}
	class="min-h-screen flex flex-col justify-center items-center bg-[var(--background-secondary)] py-16 px-10 transition-all duration-700 ease-out"
	style="opacity: {inView ? 1 : 0}; transform: translateY({inView ? 0 : 50}px);"
>
	<h2 class="text-2xl font-semibold text-[var(--primary-text)] mb-8 text-center">
		Featured Projects
	</h2>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
		{#each featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<div class="text-center mt-10">
		<a
			href="/projects"
			class="text-[var(--accent)] text-base hover:underline"
		>
			View All Projects →
		</a>
	</div>
</section>

<style>
		html {
		scroll-behavior: smooth;
	}

	body {
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}

	section {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>
