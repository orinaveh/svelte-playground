<script lang="ts">
	import Card from '@smui/card';
    import Button from '@smui/button';
	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<Card padded>{name}</Card>
	<Button variant="raised" on:click={() => console.log('sadsad')}>aaa</Button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>