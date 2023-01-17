
<script>

	import "../app.css"

	import { page } from "$app/stores"
	
	import Navbar from "$lib/components/Navbar.svelte"
	import PageTransition from "$lib/components/PageTransition.svelte"

</script>

	<Navbar/>

	<PageTransition url={$page.url}>
		
		<slot/>

	</PageTransition>

<style type="postcss">

</style>