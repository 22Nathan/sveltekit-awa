

<script>

    // ---------------------------------------
    // IMPORT

    import { onMount } from "svelte"
    import gsap from "gsap"
    import { horizontalLoopSlider } from "$lib/js/horizontalLoopSlider"
    import { constSkills } from "$lib/const/const"
	import ScrollTrigger from "gsap/dist/ScrollTrigger"

    // ---------------------------------------
    // LET & CONST & VAR

    // ---------------------------------------
    // ONMOUNT
    
    onMount(()=>{
        gsap_infinite_slider()
        is_element_sticky()
        gsap_automate_sticky()
        card_hover()
    })

    // ---------------------------------------
    // GSAP

    function gsap_infinite_slider(){

        const all_carousel_item = gsap.utils.toArray(".carouselitem")
        const loop = horizontalLoopSlider(all_carousel_item, { paused: true, draggable: true, paddingRight:10, })

        all_carousel_item.forEach((carouselitem, i) => 
            carouselitem.addEventListener("click", () => 
                loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})
            )
        )

        document.querySelector(".next")?.addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}))
        document.querySelector(".prev")?.addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}))
        document.querySelectorAll(".carouselitem").forEach((item) =>
            item.addEventListener("click", () => loop.awaAddThis())
        )

        loop.awaAddThis()

    }

    // ---------------------------------------
    // FUNCTIONS
    
    function is_element_sticky(){

        const el = document.querySelector(".sticky")
        const observer = new IntersectionObserver( 
            ([e]) => e.target.firstElementChild?.classList.toggle("is-pinned", e.intersectionRatio < 1), { threshold: [1] }
        )
        if(el != null) observer.observe(el);

    }

    function get_left_most_element(){

        let all_carousel_item = document.querySelectorAll('.carouselitem') 
        /** @type {Element|null} */
        let left_most = null
        all_carousel_item.forEach( el => {
            if(!left_most){
                left_most = el
                return
            }
            if(el.getBoundingClientRect()['left'] < left_most.getBoundingClientRect()['left']) 
                left_most = el

        })

    }

    function gsap_automate_sticky(){

        gsap.registerPlugin(ScrollTrigger)

        for( let i = 0 ; i < constSkills.length ; i++ ){
            ScrollTrigger.create({
                trigger : `.awa-block-${i}`,
                start: "top 30%",
                end: "bottom",
                // markers: true,
                // onEnter: function() { document.querySelector(".next")?.click() } 
            })
        }

    }

    function card_hover(){

        const cards = document.querySelectorAll('.awa-card')

        cards.forEach( card  => {
            // @ts-ignore
            card.onmousemove = (/** @type {{ clientX: number; clientY: number; }} */ e) => {
                const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top
                // @ts-ignore
                card.style.setProperty("--mouse-x", `${x}px`)
                // @ts-ignore
                card.style.setProperty("--mouse-y", `${y}px`)
            }
        })

    }

</script>

<!-- --------------------------------------- -->

    <div class="relative">

        <!-- <div class="hidden is-pinned left-item"></div> -->

        <div class="h-[10000px]">

            <div class="sticky top-[-1px] pt-[71px] pb-2 z-50">
                
                <div class="relative w-full">
                    <div class="relative flex items-center mx-auto px-8 max-w-3xl w-full" style="-webkit-box-align: center;">
                        <div class="max-w-7 max-h-7 shrink"></div>
                        <div class="w-px h-6 shrink-0 mx-6 bg-white/20 hidden sm:block"></div>
                        <div class="flex items-center flex-1 overflow-hidden" style="-webkit-box-align: center; -webkit-mask-image: linear-gradient( to right, transparent 0%, black 16px, black calc(100% - 64px), transparent 100% );">
                            <div class="relative flex items-center overflow-x-hidden scroll-smooth shadow-none outline-none" style="-webkit-box-align: center;">
                                { #each constSkills as { text , anchor } }
                                    <a 
                                        href="#{anchor}" target="_self"
                                        class="
                                        relative carouselitem text-sm leading-normal whitespace-nowrap
                                        h-8 px-4 cursor-pointer select-none items-center flex m-0
                                        text-[#8a8f98] hover:text-[#d0d6e0] active:text-[#f7f8f8] transition-colors"
                                    > 
                                        { text } 
                                    </a>
                                { /each }
                            </div>
                        </div>
                        <button 
                            on:click={()=>{get_left_most_element()}}
                            class="prev h-8 w-8 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98" class="rotate-180">
                                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                            </svg>
                        </button>
                        <button 
                            on:click={()=>{get_left_most_element()}}
                            class="next h-8 w-8 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98">
                                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <div class="container mx-auto pt-14">

                <div id="contcards" class="flex flex-col duration-200">

                    { #each constSkills as { text , list , anchor } , i }

                        <h1 id="{anchor}" class="anchor pb-3 pt-10"> { text } </h1>
                            
                        <div class="awa-block-{i} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">

                            { #each list as { label , resume } }
                                
                                <div class="awa-card group relative flex rounded-2xl transition-shadow hover:shadow-md bg-[hsl(0deg_0%_100%/3%)] hover:shadow-black/5">
                                    <div class="pointer-events-none">
                                        <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                                            <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[hsla(0,0%,100%,.01)] stroke-[hsl(0deg_0%_100%/3%)]">
                                                <defs>
                                                    <pattern id=":R5ihd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="22">
                                                        <path d="M.5 56V.5H72" fill="none"></path>
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" stroke-width="0" fill="url(#:R5ihd6:)"></rect>
                                                <svg x="50%" y="22" class="overflow-visible">
                                                    <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
                                                </svg>
                                            </svg>
                                        </div>
                                        <div class="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 from-[#202D2E] to-[#303428]" style="-webkit-mask-image: radial-gradient(180px at var(--mouse-x) var(--mouse-y), white, transparent);">
                                        </div>
                                        <div class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" style="-webkit-mask-image: radial-gradient(180px at var(--mouse-x) var(--mouse-y), white, transparent);">
                                            <svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[hsl(0deg_0%_100%/3%)] stroke-white/10">
                                                <defs>
                                                    <pattern id=":R1dihd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="22">
                                                        <path d="M.5 56V.5H72" fill="none"></path>
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" stroke-width="0" fill="url(#:R1dihd6:)"></rect>
                                                <svg x="50%" y="22" class="overflow-visible">
                                                    <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
                                                </svg>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20"></div>
                                    <div class="relative rounded-2xl px-4 <pt-16> pt-4 pb-4">
                                        <div class="flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white/15 group-hover:bg-emerald-300/10 group-hover:ring-emerald-400">
                                            <svg viewBox="0 0 20 20" aria-hidden="true" class="h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-emerald-300/10 group-hover:stroke-emerald-400">
                                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"></path>
                                                <path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
                                            </svg>
                                        </div>
                                        <h3 class="mt-4 text-sm font-semibold leading-7 text-white">
                                            <h1>
                                                <span class="absolute inset-0 rounded-2xl"></span>
                                                { label }
                                            </h1>
                                        </h3>
                                        <p class="mt-1 text-sm text-zinc-400">
                                            { resume }
                                        </p>
                                    </div>
                                </div>

                            { /each }

                        </div>

                    { /each }

                </div>

            </div>

        </div>

    </div>

<!-- --------------------------------------- -->

<style type="postcss">

    .anchor {
        scroll-margin-top: 100px;
    }

</style>