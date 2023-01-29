
<script>

    import { fly } from "svelte/transition"
    import { page } from '$app/stores'

    // /** @type {any} */
    // export let url

    /** @type {any} */
    export let currentPath

</script>

<!-- --------------------------------------- -->

    <!-- {#if transition.type === 'page'}
        {#key $page.url}
            <div id="fffffffffffffffffffffffffff" in:fly={{ y: -50, duration: 250 , delay: 300 }}>
                <slot />
            </div>
        {/key}
    {/if}

    {#if transition.type === 'fade'}
        <div
            class="fade"
            style:animation-duration="{transition.duration}ms"
            style:animation-delay="{transition.delay}ms"
        >
            <slot />
        </div>
    {/if} -->


    {#key currentPath}

        <div
            in:fly={{ y: -50 , duration: 250 , delay: 300 }}
        >
            <slot/>
        </div>
        
    {/key} 

<!-- --------------------------------------- -->
