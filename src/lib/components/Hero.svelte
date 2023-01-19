
<script>

    import { enhance } from '$app/forms';
    import { page } from '$app/stores'

    import gsap from 'gsap';

	import Counter from "$lib/components-sub/Counter.svelte"

    // ---------------------------------------

    let tl = gsap.timeline({})

    function gsap_rotate(){
        if(tl.isActive()) return
        // @ts-ignore
        tl.to(".gsap-rotate", {rotate:(gsap.getProperty(".gsap-rotate", 'rotate')+90), duration:.4})
        
    }

    // ---------------------------------------

    /** @param {any} event */
    async function submitHandler(event){

        const form = event.target

        if(!form) return

        const data = new FormData(form)

        let res = await fetch(form.action, {
            method: form.method,
            body: data,
        })

        let text = await res.text()

        console.log(text);
        
    }

    // ---------------------------------------

</script>

<!-- --------------------------------------- -->

    <header class="container mx-auto pt-36 pb-32 md:pb-36 md:pt-56 text-center flex flex-col items-center cursor-default relative">
        
        <h1 class="title text-5xl md:text-7xl lg:text-8xl max-w-[720px] mb-10">
            <span id="awa-text-gradient" class="awa-text-gradient relative z-30 bg-gradient-to-r from-awa-3 via-awa-4 to-awa-3">
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
                on:mouseenter={()=>{gsap_rotate()}}
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

        <div class="pl-0">
            <!-- 
            <div 
                class="
                    relative py-32
                    before:absolute before:inset-0 before:mx-auto before:h-full before:w-px 
                    before:bg-gradient-to-b before:from-white/20 before:via-white/10"
            >
            </div> 
            -->
        </div>

    </header>

<!-- --------------------------------------- -->

<style type="postcss">

</style>