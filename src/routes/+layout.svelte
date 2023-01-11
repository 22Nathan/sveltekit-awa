
<script>

	import "../app.css"

	import { slide } from "svelte/transition";
	import { constNav } from "$lib/const/const";

	import Navbar from "$lib/components/Navbar.svelte";

</script>

	<Navbar/>

	<slot></slot>

<style type="postcss">

</style>