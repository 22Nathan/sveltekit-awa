
<script>

    import { fly } from "svelte/transition"

    /** @type {URL} */
    export let url

</script>

<!-- --------------------------------------- -->

{#key url}

    <!-- 
    <div
        on:introstart={() => {document.body.classList.add("overflow-hidden")}}
        on:introend={() => {document.body.classList.remove("overflow-hidden")}}
        in:fly={{ y: -50 , duration: 250 , delay: 300 }}
    > 
    -->
    <div
        in:fly={{ y: -50 , duration: 250 , delay: 300 }}
    >
        <slot/>
    </div>
    
{/key}