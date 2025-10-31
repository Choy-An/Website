<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>

	<!-- Preview PDF -->
	{#if data}
		<div class="pdf-viewer">
			<iframe src={data} width="100%" height="800px"></iframe>
		</div>
	{/if}
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}

	.pdf-viewer {
		width: 100%;
		margin-top: 2rem;
		border: 1px solid var(--border-color, #e5e5e5);
		border-radius: 8px;
		overflow: hidden;
	}
</style>
