<main>
    <div class="header">
	  <h1>Hello {names[0]}!</h1>
    </div>
    <Grid columns={2}>
        {#each names as name}
        <Cell span={name === 'Ori' ? 4 : 2}>
            <Card padded>{name}</Card>
        </Cell>
        {/each}
    </Grid>
	<Button use={[easterEgg]} on:easteregg={(detail) => names = [...names, detail?.detail.number]} variant="raised" on:click={() => console.log('sadsad')}>aaa</Button>
</main>


<script lang="ts">
	import Card from '@smui/card';
    import Grid, { Cell } from '@smui/layout-grid';
    import Button from '@smui/button';
    import { easterEgg } from './easterEgg';
	let names = ['Ori', 'Itay', 'Ben', 'Guy', 'Ido'];
</script>

<style lang="scss">
    .header {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
          text-decoration: underline;
          text-transform: uppercase;  
        }
    }
</style>