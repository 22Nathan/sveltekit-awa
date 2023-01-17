
<script>

	import { onMount } from "svelte"

	import Hero from "$lib/components/Hero.svelte"
	import Blog from "$lib/components/Blog.svelte"
	// import Section from "$lib/components/Section.svelte"

	// /** @type {import('./$types').PageData} */
	// export let data

</script>

<!-- --------------------------------------- -->

	<svelte:head>
		<title>Home</title>
		<meta name="description" content="Svelte demo app" />
	</svelte:head>

	<Hero/>
	<Blog/>
	<!-- <Section/> -->



