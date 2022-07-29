<main>
	<h1>Hello {name}!</h1>
	<Card padded>{name}</Card>
	<Button variant="raised" on:click={() => console.log('sadsad')}>aaa</Button>
</main>

<script lang="ts">
	import './theme/dark/_smui-theme.scss';
	import Card from '@smui/card';
    import Button from '@smui/button';
	export let name: string;
</script>