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
			['#ff0055', '#ff77aa'],
			['#00d9ff', '#0077ff']
		];

		window.addEventListener('mousemove', (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			for (let i = 0; i < 2; i++) {
				const [c1, c2] = colors[Math.floor(Math.random() * colors.length)];
				particles.push({
					x: mouse.x - 10 + Math.random() * 5,
					y: mouse.y - 10 + Math.random() * 5,
					size: Math.random() * 1.8 + 0.8,
					color1: c1,
					color2: c2,
					length: Math.random() * 15 + 8,
					speedX: (Math.random() - 0.5) * 2.2,
					speedY: (Math.random() - 0.5) * 2.2,
					life: 90
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
<section
	class="hero relative min-h-screen flex flex-col md:flex-row justify-center lg:justify-between 
	md:items-start items-center p-10 overflow-hidden"
>

	<canvas bind:this={canvasEl} class="absolute inset-0 pointer-events-none z-0"></canvas>

	<!-- LEFT TEXT -->
	<div class="relative z-10 md:flex-1">
		<h1 class="dynamic-name md:text-left text-[3.8rem] md:text-[4.2rem] font-bold mb-5 leading-[1.1]">
			{name} {lastName},
		</h1>

		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight max-w-lg leading-relaxed">
			{description}
		</p>

		<!-- Socials -->
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

	<!-- RIGHT GLITCH PORTRAIT -->
	<div class="glitch-wrapper relative z-10 md:ml-10 mt-6 md:mt-0 md:-mt-4">
		<img src="/aswanth.png" alt="Aswanth" class="glitch-img" draggable="false" />
	</div>
</section>

<!-- SKILL BAND SECTION -->
<section bind:this={skillsSection} class="skill-band w-full py-12">
	<div class="skill-scroll">
		{#each skillsItems as skill, i}
			<div
				class="skill-item"
				style="
					opacity: {skillsVisible ? 1 : 0};
					transform: translateY({skillsVisible ? 0 : '10px'});
					transition-delay: {i * 0.05}s;
				"
			>
				<img src={skill.logo} alt={skill.name} />
				<span>{skill.name}</span>
			</div>
		{/each}
	</div>
</section>

<!-- PROJECTS -->
<section bind:this={projectSection} class="projects-section py-16 px-10 bg-[var(--background-secondary)]">
	<h2 class="text-[2rem] font-bold mb-8 text-center md:text-left">Featured Projects</h2>

	<div class="grid md:grid-cols-3 gap-8">
		{#each featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<div class="text-center mt-8">
		<a href="/projects"
			class="inline-block px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg hover:bg-[var(--accent-dark)] transition">
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

/* --- NAME GRADIENT ANIMATION --- */
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
	0%   { background-position: 0% 50%; }
	50%  { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
}

/* =====================================================
   REAL GLITCH PORTRAIT (RGB SPLIT + SCANLINES + DRIFT)
   ===================================================== */

.glitch-wrap {
	position: relative;
	width: 340px;
	aspect-ratio: 3/4;
	border-radius: 1rem;
	overflow: hidden;
}

/* Base + RGB layers stacked */
.glitch-base,
.glitch-r,
.glitch-g,
.glitch-b {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
	pointer-events: none;
}

/* Idle scanline drift for all layers */
@keyframes idleGlitchDrift {
	0%   { transform: translate(0px, 0px); }
	30%  { transform: translate(1px, -1px); }
	60%  { transform: translate(-1px, 1px); }
	100% { transform: translate(0px, 0px); }
}

.glitch-wrap img {
	animation: idleGlitchDrift 4.5s ease-in-out infinite;
	filter: contrast(1.06);
}

/* RGB layers (hidden until hover) */
.glitch-r,
.glitch-g,
.glitch-b {
	mix-blend-mode: screen;
	opacity: 0.0;
	transition: opacity 0.25s ease, transform 0.25s ease;
}

/* Hover glitch amplification */
.glitch-wrap:hover .glitch-r {
	opacity: 0.45;
	transform: translateX(-3px);
}
.glitch-wrap:hover .glitch-g {
	opacity: 0.45;
	transform: translateX(3px);
}
.glitch-wrap:hover .glitch-b {
	opacity: 0.45;
	transform: translateY(3px);
}

/* Subtle scanline overlay */
.glitch-wrap::after {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: inherit;
	background: repeating-linear-gradient(
		to bottom,
		rgba(255,255,255,0.04) 0px,
		rgba(255,255,255,0.04) 1px,
		transparent 1px,
		transparent 3px
	);
	pointer-events: none;
	mix-blend-mode: overlay;
}

/* =====================================================
   SKILL BAND
   ===================================================== */

.skill-band {
	overflow: hidden;
	display: flex;
	justify-content: center;
}

.skill-scroll {
	display: flex;
	gap: 2rem;
	padding: 1rem 2rem;
	overflow-x: auto;
	scrollbar-width: none;
}
.skill-scroll::-webkit-scrollbar {
	display: none;
}

.skill-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	min-width: 85px;
	transform: translateY(10px);
	transition: opacity 0.4s ease, transform 0.4s ease;
}
.skill-item img {
	width: 36px;
	height: 36px;
}

</style>
