<script>
	import CustomCard from './lib/components/Card.svelte';
</script>

<div class="minimal-layout">
	<div class="description">
		<h1>Emar Industriya Card Effects Showcase</h1>
		<p>Testing different rarities and holo effects with custom alpha masking</p>
	</div>
	<div class="cards-grid">
		<!-- Ultra Rare V Full Art -->
		<div class="card-showcase">
			<h3>Ultra Rare V Full Art</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare ultra"
				supertype="pokémon"
			/>
		</div>

		<!-- Regular Holo -->
		<div class="card-showcase">
			<h3>Regular Holo</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare holo"
				supertype="pokémon"
			/>
		</div>

		<!-- V Regular -->
		<div class="card-showcase">
			<h3>V Regular</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare holo v"
				supertype="pokémon"
			/>
		</div>

		<!-- V-MAX -->
		<div class="card-showcase">
			<h3>V-MAX</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare holo vmax"
				supertype="pokémon"
			/>
		</div>

		<!-- V-STAR -->
		<div class="card-showcase">
			<h3>V-STAR</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare holo vstar"
				supertype="pokémon"
			/>
		</div>

		<!-- Rainbow Rare -->
		<div class="card-showcase">
			<h3>Rainbow Rare</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare rainbow"
				supertype="pokémon"
			/>
		</div>

		<!-- Secret Rare -->
		<div class="card-showcase">
			<h3>Secret Rare</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare secret"
				supertype="pokémon"
			/>
		</div>

		<!-- Amazing Rare -->
		<div class="card-showcase">
			<h3>Amazing Rare</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare amazing"
				supertype="pokémon"
			/>
		</div>

		<!-- Shiny Rare -->
		<div class="card-showcase">
			<h3>Shiny Rare</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare shiny"
				supertype="pokémon"
			/>
		</div>

		<!-- Shiny V -->
		<div class="card-showcase">
			<h3>Shiny V</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare shiny v"
				supertype="pokémon"
			/>
		</div>

		<!-- Shiny VMAX -->
		<div class="card-showcase">
			<h3>Shiny VMAX</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare shiny vmax"
				supertype="pokémon"
			/>
		</div>

		<!-- Radiant Holo -->
		<div class="card-showcase">
			<h3>Radiant Holo</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare radiant"
				supertype="pokémon"
			/>
		</div>

		<!-- Cosmos Holo -->
		<div class="card-showcase">
			<h3>Cosmos Holo</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare holo cosmos"
				supertype="pokémon"
			/>
		</div>

		<!-- Reverse Holo -->
		<div class="card-showcase">
			<h3>Reverse Holo</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="common"
				supertype="pokémon"
				foil="reverse-holo"
			/>
		</div>

		<!-- Trainer Full Art -->
		<div class="card-showcase">
			<h3>Trainer Full Art</h3>
			<CustomCard
				img="/custom/emar-industriya.png"
				alphaMask="/custom/emar-industriya-alpha.png"
				rarity="rare ultra"
				supertype="trainer"
				subtypes="supporter"
			/>
		</div>
	</div>
</div>

<style>
	.minimal-layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: #1a1a1a;
		color: white;
		font-family: Arial, sans-serif;
		padding: 1rem;
		gap: 5rem;
		width: 100%;
		box-sizing: border-box;
		overflow-x: hidden;
	}

	.description {
		text-align: center;
		margin-bottom: 2rem;
	}

	.description h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 3rem;
		justify-items: center;
		width: 100%;
		max-width: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.card-showcase {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.card-showcase h3 {
		margin: 0;
		font-size: 1.2rem;
		color: #e0e0e0;
		text-align: center;
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.description {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 0;
	}

	.description h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: 300;
	}

	.description p {
		font-size: 1.2rem;
		line-height: 1.6;
		opacity: 0.8;
	}

	.card-container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem 1rem;
		max-width: 300px;
	}

	.card-image {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
		border-radius: 15px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 768px) {
		.minimal-layout {
			flex-direction: column;
		}
		
		.description h1 {
			font-size: 2rem;
		}
		
		.description p {
			font-size: 1rem;
		}
	}
</style>
