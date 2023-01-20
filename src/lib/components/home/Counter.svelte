
<script>

    // ---------------------------------------
    // IMPORT

	import { spring } from 'svelte/motion'
	import { awa_store_total } from '$lib/js/stores'
    import toast , { Toaster } from 'svelte-french-toast'

    // ---------------------------------------
    // LET & CONST & VAR	

	const resultCount = spring()
	$: resultCount.set($awa_store_total)
	$: offset = modulo($resultCount, 1)

    // ---------------------------------------
    // FUNCTIONS RANDOM

	/** 
    * @param {number} n, m 
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
