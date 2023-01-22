
<script>

	import "../app.css"

	import { page } from "$app/stores"
	import Navbar from "$lib/components/Navbar.svelte"
	import PageTransition from "$lib/components/PageTransition.svelte"
	import Footer from "$lib/components/Footer.svelte"

</script>

	<Navbar/>
	<PageTransition url={$page.url}>
		<slot/>
	</PageTransition>
	<Footer/>

<style type="postcss">

</style>