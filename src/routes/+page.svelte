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
	let canvasEl: HTMLCanvasElement;

	onMount(() => {
		// Intersection Observers
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

		// Canvas Shooting Star Effect
		const ctx = canvasEl.getContext('2d');
		let particles: any[] = [];
		let mouse = { x: 0, y: 0 };

		const colors = [
			['#ff0055', '#ff77aa'], // neon pink gradient
			['#00d9ff', '#0077ff'], // neon cyan gradient
		];

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			for (let i = 0; i < 2; i++) {
				const [c1, c2] = colors[Math.floor(Math.random() * colors.length)];
				particles.push({
					x: mouse.x - 10 + Math.random() * 5, // closer to cursor
					y: mouse.y - 10 + Math.random() * 5,
					size: Math.random() * 1.8 + 0.8,
					color1: c1,
					color2: c2,
					length: Math.random() * 15 + 8, // comet streak length
					speedX: (Math.random() - 0.5) * 2.2,
					speedY: (Math.random() - 0.5) * 2.2,
					life: 90,
				});
			}
		});

		function animate() {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
			for (let i = particles.length - 1; i >= 0; i--) {
				const p = particles[i];
				p.x += p.speedX;
				p.y += p.speedY;
				p.life--;

				// Trail gradient
				const grad = ctx.createLinearGradient(p.x, p.y, p.x - p.length, p.y - p.length);
				grad.addColorStop(0, p.color1);
				grad.addColorStop(1, p.color2);

				ctx.beginPath();
				ctx.strokeStyle = grad;
				ctx.lineWidth = p.size;
				ctx.moveTo(p.x, p.y);
				ctx.lineTo(p.x - p.length * 0.7, p.y - p.length * 0.7);
				ctx.stroke();
				ctx.closePath();

				if (p.life <= 0) particles.splice(i, 1);
			}
			requestAnimationFrame(animate);
		}

		function resizeCanvas() {
			canvasEl.width = window.innerWidth;
			canvasEl.height = window.innerHeight;
		}
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		animate();
	});
</script>

<!-- HERO SECTION -->
<section class="hero relative min-h-screen flex flex-col md:flex-row justify-center lg:justify-between items-center p-10 overflow-hidden">
	<canvas bind:this={canvasEl} class="absolute inset-0 pointer-events-none z-0"></canvas>

	<div class="relative z-10 md:flex-1 gap-10px">
		<h1 class="dynamic-name md:text-left text-[3.8rem] md:text-[4.2rem] font-bold mb-5 leading-[1.1] overflow-visible">
			{name} {lastName},
		</h1>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight max-w-lg leading-relaxed">
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

	<!-- Skills -->
	<div
		bind:this={skillsSection}
		class="grid grid-cols-3 gap-5 mt-10 ml-8 w-full max-w-md justify-items-center relative z-10"
	>
		<img
			src="/aswanth.png"
			alt="Aswanth"
			class="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-10 transition-opacity duration-700 ease-in-out pointer-events-none rounded-xl"
			draggable="false"
		/>

		{#each skillsItems.slice(0, 9) as skill, i}
			<div
				class="skill-card flex flex-col items-center justify-center p-3 rounded-lg 
				bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] 
				shadow-sm hover:shadow-md transition-all duration-700 ease-out cursor-default 
				w-[90px] h-[90px] relative"
				style="opacity: {skillsVisible ? 1 : 0}; transform: translate(
					{skillsVisible
						? 0
						: i % 4 === 0
						? '-40px'
						: i % 4 === 1
						? '40px'
						: '0px'},
					{skillsVisible
						? 0
						: i % 4 === 2
						? '-40px'
						: i % 4 === 3
						? '40px'
						: '0px'}
				); transition-delay: {i * 0.1}s;"
			>
				<img src={skill.logo} alt={skill.name} class="w-8 h-8 mb-2 object-contain" />
				<span class="text-[var(--primary-text)] text-[0.75rem] font-normal text-center">
					{skill.name}
				</span>
			</div>
		{/each}
	</div>
</section>
<!-- FEATURED PROJECTS SECTION -->
<section
  bind:this={projectSection}
  class="projects-section py-16 px-10 bg-[var(--background-secondary)]"
>
  <h2 class="text-[2rem] font-bold mb-8 text-center md:text-left">Featured Projects</h2>
  
  <div class="grid md:grid-cols-3 gap-8">
    {#each featuredProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="text-center mt-8">
    <a
      href="/projects"
      class="inline-block px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg hover:bg-[var(--accent-dark)] transition"
    >
      View All Projects
    </a>
  </div>
</section>
<style>
	canvas {
		mix-blend-mode: overlay;
		filter: brightness(1.2) contrast(1.1);
		opacity: 0.85;
	}
	.skill-card:hover {
		transform: translateY(-4px) scale(1.05);
	}
	.dynamic-name {
		position: relative;
		display: inline-block;
		line-height: 1.1;
		padding-bottom: 0.15em;
		background: linear-gradient(90deg, #00d4ff, #ff00e0, #00ff9d);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 300%;
		animation: glowMove 6s linear infinite;
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
