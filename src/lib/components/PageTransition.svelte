
<script>

    import { fly } from "svelte/transition";

    /** @type {URL} */
    export let url

</script>

<!-- --------------------------------------- -->

{#key url}

    <div
        in:fly={{ y: -50 , duration: 250 , delay: 300 }}
        out:fly={{ y: -50 , duration: 250 }}
    >
        <slot/>
    </div>
    
{/key}