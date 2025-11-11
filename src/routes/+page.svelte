<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title } from '@data/home';
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
	let skillsVisible = false;
	let skillsSection: HTMLElement;

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

		const skillObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						skillsVisible = true;
						skillObserver.disconnect();
					}
				});
			},
			{ threshold: 0.3 }
		);
		if (skillsSection) skillObserver.observe(skillsSection);
	});
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<!-- 🟩 HERO / LANDING SECTION -->
<section class="min-h-screen flex flex-col md:flex-row justify-center lg:justify-between items-center p-10">
	<div class="md:flex-1 gap-10px">
		<h1 class="dynamic-name md:text-left text-[3.5rem] font-bold mb-3 leading-none">
			{name} {lastName},
		</h1>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>

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

	<!-- 🧩 Skill Grid with animation -->
	<div
		bind:this={skillsSection}
		class="grid grid-cols-3 gap-5 mt-10 ml-8 w-full max-w-md justify-items-center"
	>
		{#each skillsItems.slice(0, 9) as skill, i}
			<div
				class="skill-card flex flex-col items-center justify-center p-3 rounded-lg 
				bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] 
				shadow-sm hover:shadow-md transition-all duration-500 ease-out cursor-default 
				w-[90px] h-[90px]"
				style="
					opacity: {skillsVisible ? 1 : 0};
					transform: translate(
						{skillsVisible
							? 0
							: i % 4 === 0
							? '-40px'
							: i % 4 === 1
							? '40px'
							: i % 4 === 2
							? '0px'
							: '0px'},
						{skillsVisible
							? 0
							: i % 4 === 2
							? '-40px'
							: i % 4 === 3
							? '40px'
							: '0px'}
					);
					transition-delay: all 0.8s ease-out;
				"
			>
				<img src={skill.logo} alt={skill.name} class="w-8 h-8 mb-2 object-contain" />
				<span class="text-[var(--primary-text)] text-[0.75rem] font-normal text-center">
					{skill.name}
				</span>
			</div>
		{/each}
	</div>
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
		<a href="/projects" class="text-[var(--accent)] text-base hover:underline">
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
	.skill-card:hover {
		transform: translateY(-4px) scale(1.05);
	}
	.dynamic-name {
		position: relative;
		display: inline-block;
		background: linear-gradient(90deg, #00d4ff, #ff00e0, #00ff9d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: glowMove 6s linear infinite;
		background-size: 300%;
		transition: text-shadow 0.4s ease, transform 0.4s ease;
	}
	.dynamic-name::after {
		content: '';
		position: absolute;
		inset: 0;
		filter: blur(30px);
		background: inherit;
		opacity: 0;
		transition: opacity 0.4s ease;
		z-index: -1;
	}
	.dynamic-name:hover {
		transform: scale(1.03);
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
	}
	.dynamic-name:hover::after {
		opacity: 0.8;
	}
	@keyframes glowMove {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
