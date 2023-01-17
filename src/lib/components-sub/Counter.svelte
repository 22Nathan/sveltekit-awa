
<script>

	import { spring } from 'svelte/motion'
	import { onMount } from 'svelte'
	import { page } from '$app/stores';

    import toast , { Toaster } from 'svelte-french-toast'

	let dateNow = new Date(), month, day, year
	/** @type {string} */
	let dateString

	console.log($page.data);

	onMount(()=>{
		getDateNow()
	})

	$: count = $page.data.total

	const resultCount = spring()

	$: resultCount.set(count)
	$: offset = modulo($resultCount, 1)

	/** 
    * @param {number} n 
    * @param {number} m 
    */
	function modulo(n, m) { return ((n % m) + m) % m }

    /** @param {number} num */
    function updateCounter(num) {

    }

	function getDateNow() {
		month = '' + (dateNow.getMonth() + 1)
		day   = '' +  dateNow.getDate()
		year  =       dateNow.getFullYear()

		if (month.length < 2) month = '0' + month
		if (day.length < 2) day = '0' + day

		dateString = [year, month, day].join('-')
	}

</script>

<!-- --------------------------------------- -->

    <Toaster/>

    <div class="counter">

        <button on:click={ () => 
            { 
                (count -= 1) 
                // toast.promise( runPromise(1),
                //     {
                //         loading: 'Saving...',
                //         success: 'Settings saved!',
                //         error: 'Could not save.',
                //     },
                //     {
                //         position : 'bottom-right',
                //         style: 'border-radius: 200px; background: #333; color: #fff;',
                //     },) 
            } 
        }>
            <svg aria-hidden="true" viewBox="0 0 1 1">
                <path d="M0,0.5 L1,0.5" />
            </svg>
        </button>

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

        <button on:click={ () => 
			{
				(count += 1) 
			}
		}>
            <svg aria-hidden="true" viewBox="0 0 1 1">
                <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
            </svg>
        </button>

    </div>

<!-- --------------------------------------- -->

<style>
	.counter {
		display: flex;
		margin: 1rem 0;
	}

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
