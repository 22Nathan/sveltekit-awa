
<script>

	import "../app.css"

	import Navbar from "$lib/components/Navbar.svelte"
	import PageTransition from "$lib/components/PageTransition.svelte"
	import Footer from "$lib/components/Footer.svelte"

	/** @type {any} */
	export let data


</script>

<!-- --------------------------------------- -->

	<Navbar/>
	<PageTransition currentPath={ data.currentPath }>
	<!-- <PageTransition url={ data.url }> -->
	<!-- <PageTransition url={ $page.data.url }> -->
		<slot/>
	</PageTransition>
	<Footer/> 
	

	<!-- <PageTransition transition={{ type: 'fade', duration: 1000 }}>
		<div class="">
			<Navbar/>
			<PageTransition transition={{ type: 'page' }}>
				<slot />
			</PageTransition>
			<Footer/>
		</div>
	</PageTransition> -->

<!-- --------------------------------------- -->

<style type="postcss">

</style>