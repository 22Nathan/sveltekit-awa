
<script>
// @ts-nocheck


    // ---------------------------------------
    // IMPORT

    import { onMount } from 'svelte'
    import { awa_store_total } from '$lib/js/stores'
    import toast, { Toaster } from 'svelte-french-toast'
    import gsap from 'gsap'
	import Counter from "$lib/components/home/Counter.svelte"

    // ---------------------------------------
    // ONMOUNT

    onMount(()=>{
    })

    // ---------------------------------------
    // GSAP

    const tl = gsap.timeline({})
    const t2 = gsap.timeline({})

    function gsap_rotate(){
        if(tl.isActive()) return
        // @ts-ignore
        tl.to(".gsap-rotate", {rotate:(gsap.getProperty(".gsap-rotate", 'rotate')+90), duration:.4})
        
    }

    function gsap_scale(){
        if(t2.isActive()) return
        t2
        .to(".gsap-scale", {scale:1.10, duration:.4})
        .to(".gsap-scale", {scale:1, duration:.4})
    }

    // ---------------------------------------
    // FORM ACTIONS

    /** @param {any} event */
    async function submitHandler(event){

        async function saveLike(){

            const form = event.target
            if(!form) return

            const data = new FormData(form)

            let res = await fetch(form.action, {
                method: form.method,
                body: data,
            })

            let result = await res.json()
            awa_store_total.update(n => Number.parseInt(result.data.slice(1,-1)))

            return res.ok

        }

        toast.promise(
            saveLike(),
            { loading: 'Saving...', success: 'Like saved!', error: 'Could not save.', },
            { 
                style: 'border-radius: 200px; background: #333; color: #fff;',
                position: "bottom-right"
            },
        )
        
    }

</script>

<!-- --------------------------------------- -->

    <Toaster/>


    <!-- <div class="absolute left-0 right-0 top-[450px] m-auto overflow-hidden -z-10">
        <Lottie path="./src/lib/lotties/87661-lines.json"/>
    </div> -->


    <header class="container mx-auto pt-36 pb-32 md:pb-36 md:pt-56 text-center flex flex-col items-center cursor-default relative">
        
        <h1 class="title text-5xl md:text-7xl lg:text-8xl max-w-[720px] mb-10">
            <span 
                id="awa-text-gradient" 
                class="awa-text-gradient relative z-30 bg-gradient-to-r from-awa-3 via-awa-4 to-awa-3"
                data-rolling-text="Nathan ROSSI"
            >
                Nathan ROSSI
            </span>
        </h1>

        <p class="text-xl md:text-3xl mb-20 lg:mb-24 relative z-30 mix-blend-color-dodge max-w-[520px] text-[#e5e5e5]">
            Full-Stack Developper 
        </p>

        <div class="relative mx-auto flex items-center justify-center">

            <div class="absolute inset-0 flex flex-wrap blur-3xl opacity-70">
                <div aria-hidden="true" class="h-1/2 w-1/2 bg-[rgb(21,101,192)]"></div>
                <div aria-hidden="true" class="h-1/2 w-1/2 bg-purple-500"></div>
                <div aria-hidden="true" class="h-1/2 w-1/2 rounded-bl-full bg-[rgb(113,97,239)]"></div>
                <div aria-hidden="true" class="h-1/2 w-1/2 rounded-br-full bg-[rgb(149,127,239)]"></div>
            </div>

            <div class="flex h-32 w-32 items-center justify-center align-middle">
                <Counter/>
            </div>

            <div 
                on:click={()=>{gsap_rotate()}}
                on:click={()=>{gsap_scale()}}
                on:keypress
                class="gsap-rotate absolute top-0 h-32 w-32 rotate-45 border border-white/20 bg-white/5 will-change-transform hover:scale-105 active:scale-95 duration-300"
            >
                <form 
                    on:submit|preventDefault={submitHandler}
                    method="POST" 
                    action="?/increment" 
                    class="z-30 w-full h-full"
                >   
                    <button class="h-full w-full">
                </form>
            </div>

        </div>

        <div class="z-20 grid place-items-center h-10 w-10 border border-white/20 bg-white/5 backdrop-blur-sm rotate-45">
            <h1 class="gsap-scale -rotate-45 will-change-transform">❤️</h1>
        </div>

    </header>

<!-- --------------------------------------- -->

<style type="postcss">

</style>