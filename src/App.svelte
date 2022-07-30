<main>
	<Router>
	<TopAppBar variant="static">
		<Row>
			<Section align="start">
				<Title>Svelte</Title>
			</Section>
			<Section align="start">
			{#each links as link}
				<Link to={link.route}>{link.title}</Link>
			{/each}
			</Section>
		</Row>
	</TopAppBar>
	<div>
		<Route path="/">
			<Home />
		</Route>
	</div>
</Router>
</main>

<script lang="ts">
	import { Router, Link, Route } from "svelte-navigator";
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'; 
	import Home from "./pages/Home/Home.svelte";
	import './theme/dark/_smui-theme.scss';

	const links: {
    title: string;
    route: string;
}[] = [{
		title: 'Home',
		route: '/'
	}, {
		title: 'About',
		route: '/about'
	}];
</script>