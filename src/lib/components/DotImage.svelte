<script>
	import { onMount } from 'svelte';

	let canvas;
	let ctx;

	onMount(() => {
		if (typeof window === 'undefined') return;

		const img = new Image();
		img.src = '/images/aswanth.jpg';

		img.onload = () => {
			const w = 350;
			const h = 350;
			canvas.width = w;
			canvas.height = h;
			ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0, w, h);

			const imgData = ctx.getImageData(0, 0, w, h);
			const pixels = imgData.data;
			ctx.clearRect(0, 0, w, h);

			const dotSize = 3;
			for (let y = 0; y < h; y += dotSize * 2) {
				for (let x = 0; x < w; x += dotSize * 2) {
					const index = (y * w + x) * 4;
					const brightness =
						(pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3;
					const radius = (1 - brightness / 255) * dotSize;
					ctx.beginPath();
					ctx.arc(x, y, radius, 0, Math.PI * 2);
					ctx.fillStyle = `rgb(${pixels[index]},${pixels[index + 1]},${pixels[index + 2]})`;
					ctx.fill();
				}
			}
		};
	});
</script>

<canvas bind:this={canvas} class="mx-auto mt-10 transition-all duration-500 hover:scale-105"></canvas>

<style>
	canvas {
		display: block;
		filter: contrast(110%) brightness(95%);
	}
</style>
