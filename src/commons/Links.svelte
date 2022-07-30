<script lang="ts">
    import { useNavigate } from 'svelte-navigator';
    import { Section } from '@smui/top-app-bar';
    import Button from '@smui/button';

    const navigate = useNavigate();

    const links: {
      title: string;
      route: string;
    }[] = [
      {
        title: 'Home',
        route: '/',
      },
      {
        title: 'About',
        route: '/about',
      },
    ];
</script>

<main>
    <Section align="start">
        {#each links as link}
            <Button variant="unelevated" color="secondary" on:click={() => navigate(link.route)}
                >{link.title}</Button
            >
        {/each}
    </Section>
</main>
