
<script>

    // ---------------------------------------
    // IMPORT	

	import { page } from '$app/stores'
	import { awa_store_total } from '$lib/js/stores'
	import Hero from "$lib/components/home/Hero.svelte"
	import Blog from "$lib/components/home/Blog.svelte"

    // ---------------------------------------
    // LET & CONST & VAR	

	if($awa_store_total == 0) awa_store_total.set($page.data.total)

</script>

<!-- --------------------------------------- -->

	<svelte:head>
		<title>Home</title>
		<meta name="description" content="Home" />
	</svelte:head>

	<Hero/>
	<Blog/>



