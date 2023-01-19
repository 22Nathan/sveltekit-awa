
<script>

	import { spring } from 'svelte/motion'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

    import toast , { Toaster } from 'svelte-french-toast'

	// onMount(()=>{
	// 	$page.subscribe( (/** @type {any} */ value) => {
	// 		console.log(value)
	// 	})
	// })

	let count = $page.data.total

	const resultCount = spring()

	$: resultCount.set(count)
	$: offset = modulo($resultCount, 1)

	/** 
    * @param {number} n 
    * @param {number} m 
    */
	function modulo(n, m) { return ((n % m) + m) % m }

</script>

<!-- --------------------------------------- -->

    <Toaster/>

    <div class="counter">

        <div class="counter-viewport">
            <div 
                class="counter-digits" 
                style="transform: translate(0, {100 * offset}%)"
            >
                <strong class="hidden" aria-hidden="true">
                    { Math.floor($resultCount + 1) }
                </strong>
                <strong>
                    { Math.floor($resultCount) }
                </strong>
            </div>
        </div>

    </div>

<!-- --------------------------------------- -->

<style>

	.counter {
		display: flex;
		margin: 1rem 0;
	}

	/*
	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	} 
	*/

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}

</style>
