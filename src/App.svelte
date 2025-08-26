<script>
	import CustomCard from './lib/components/Card.svelte';
	import { tiltEnabled } from './lib/stores/tilt.js';
	import { allCardsFlipped } from './lib/stores/flip.js';
</script>

<main>
	<header>
		<h1>FlipTop Cards Collection</h1>
		<p class="description">A collectible showcase of FlipTop emcees and battles. This is a test version.</p>
		<div class="controls">
			<button class="tilt-toggle" on:click={() => tiltEnabled.update(n => !n)}>
				Tilt: {$tiltEnabled ? 'On' : 'Off'}
			</button>
			<button class="flip-toggle" on:click={() => allCardsFlipped.update(n => !n)}>
				{$allCardsFlipped ? 'Show Fronts' : 'Show Backs'}
			</button>
		</div>
	</header>

	<section class="card-grid">
		<!-- Your card in the first position -->
		<div class="card-slot">
			<CustomCard
				img="/custom/emar-industrita-bb10.png"
				back="/custom/fliptoptgc.png"
				rarity="rare ultra"
				supertype="pokémon"
				showcase={true}
			/>
		</div>
		
		<div class="card-slot">
			<CustomCard
				img="/custom/aftersaint-ice-u13.png"
				back="/custom/fliptoptgc.png"
				rarity="fliptop holo verse v1"
				supertype="pokémon"
				showcase={true}
			/>
		</div>

		<div class="card-slot">
			<CustomCard
				img="/custom/saint-ice-u13.png"
				back="/custom/fliptoptgc.png"
				rarity="fliptop gold verse"
				showcase={true}
			/>
		</div>
		
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
		<div class="card-slot empty"></div>
	</section>
</main>

<style>
	/* Global reset to remove default margins/padding */
	:global(body) {
		margin: 0;
		padding: 0;
		background: #1a1a1a;
	}

	:global(html) {
		margin: 0;
		padding: 0;
	}

	main {
		min-height: 100vh;
		width: 100%;
		background: #1a1a1a;
		color: white;
		font-family: 'Courier New', monospace;
		padding: 2rem;
		margin: 0 auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	header {
		display: block;
		text-align: center;
		margin-bottom: 3rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	header h1 {
		display: block;
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		margin-top: 0;
		color: white;
		font-family: Arial, sans-serif;
	}

	.description {
		display: block;
		font-size: 1.1rem;
		line-height: 1.6;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
		margin-top: 0;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1.5rem;
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
		transform-style: preserve-3d;
	}

	.card-slot {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 300px;
		position: relative;
	}

	.card-slot.empty {
		border: 2px dashed rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		background: rgba(255, 255, 255, 0.02);
		transition: all 0.3s ease;
	}

	.card-slot.empty:hover {
		border-color: rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.05);
	}

	.card-slot.empty::after {
		content: '+';
		font-size: 3rem;
		color: rgba(255, 255, 255, 0.1);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.3s ease;
	}

	.card-slot.empty:hover::after {
		color: rgba(255, 255, 255, 0.3);
		transform: translate(-50%, -50%) scale(1.1);
	}

	/* Responsive design */
	@media screen and (max-width: 900px) {
		.card-grid {
			grid-template-columns: 1fr;
			grid-gap: 1.5rem;
		}
		
		.card-slot {
			min-height: 300px;
		}
	}

	.controls {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	.tilt-toggle,
	.flip-toggle {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		font-family: 'Courier New', monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		transition: background 0.2s ease;
	}

	.tilt-toggle:hover,
	.flip-toggle:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	@media screen and (min-width: 600px) and (max-width: 900px) {
		.card-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
