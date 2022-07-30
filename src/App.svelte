<script lang="ts">
    import { Router, Route } from 'svelte-navigator';
    import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
    import Home from './pages/Home/Home.svelte';
    import Links from './commons/Links.svelte';
    import './theme/dark/_smui-theme.scss';
</script>

<main>
    <Router>
        <TopAppBar variant="static">
            <Row>
                <Section align="start">
                    <Title>Svelte</Title>
                </Section>
                <Links />
            </Row>
        </TopAppBar>
        <div>
            <Route path="/">
                <Home />
            </Route>
        </div>
    </Router>
</main>
