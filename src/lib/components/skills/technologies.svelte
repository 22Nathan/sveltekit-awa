

<script>

    // ---------------------------------------
    // IMPORT

    import { onMount } from "svelte"
    import gsap from "gsap"
    import { horizontalLoopSlider } from "$lib/js/horizontalLoopSlider"
    import { constSkillsIcons } from "$lib/const/const"
    import { constSkills } from "$lib/const/const"

    // ---------------------------------------
    // LET & CONST & VAR

    // ---------------------------------------
    // ONMOUNT
    
    onMount(()=>{
        gsap_marquee()
        gsap_infinite_slider()
        is_element_sticky()
    })

    // ---------------------------------------
    // GSAP

    function gsap_marquee(){
        
        const boxes1 = gsap.utils.toArray(".lineitem1")
        const boxes2 = gsap.utils.toArray(".lineitem2")
        const boxes3 = gsap.utils.toArray(".lineitem3")
        const loop1 = horizontalLoopSlider(boxes1, { repeat: -1, paddingRight:10, speed:.5 })
        const loop2 = horizontalLoopSlider(boxes2, { repeat: -1, paddingRight:10, speed:.4, reversed:true })
        const loop3 = horizontalLoopSlider(boxes3, { repeat: -1, paddingRight:10, speed:.3 })

    }

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

        // function setMiddle(mid) {
        //     all_carousel_item.forEach( carouselitem => 
        //         carouselitem.classList.remove("middle-item")
        //     )
        //     all_carousel_item[mid].classList.add("middle-item");
        // }

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

</script>

<!-- --------------------------------------- -->

    <section class="pt-36 pb-32 md:pb-36 md:pt-56 relative">

        <div class="contlines grid grid-rows-3 gap-2 relative select-none max-w-7xl overflow-hidden place-items-center mx-auto py-10">

            <div class="row1 flex gap-2">
                { #each constSkillsIcons as { text , url , fond } }
                    <div class="lineitem1 w-20 h-20 rounded-xl">
                        <div class={ fond }></div>
                        <img src={ url } alt={ text } class="absolute z-10 inset-2/4 -translate-x-1/2 -translate-y-1/2 h-11 w-h-11">
                    </div>
                { /each }
            </div>

            <div class="row2 flex gap-2">
                { #each constSkillsIcons as { text , url , fond } }
                    <div class="lineitem2 w-20 h-20 rounded-xl">
                        <div class={ fond }></div>
                        <img src={ url } alt={ text } class="absolute z-10 inset-2/4 -translate-x-1/2 -translate-y-1/2 h-11 w-h-11">
                    </div>
                { /each }
            </div>

            <div class="row3 flex gap-2">
                { #each constSkillsIcons as { text , url , fond } }
                    <div class="lineitem3 w-20 h-20 rounded-xl">
                        <div class={ fond }></div>
                        <img src={ url } alt={ text } class="absolute z-10 inset-2/4 -translate-x-1/2 -translate-y-1/2 h-11 w-h-11">
                    </div>
                { /each }
            </div>

        </div>

        <div class="container m-auto md:px-12 xl:px-6 pt-10">

            <div class="space-y-2 text-center">
                <h2 class="z-10 text-3xl font-bold md:text-4xl text-white">
                    Technologies
                </h2>
                <p class="text-gray-300 lg:mx-auto lg:w-6/12">
                    There are all technologies, frameworks and langages i worked with
                </p>
            </div>

        </div>

        <div class="h-[10000px]">
            <div class="sticky top-[-1px] pt-[71px] pb-2">
                
                <div class="relative w-full">
                    <div class="relative flex items-center mx-auto px-8 max-w-3xl w-full" style="-webkit-box-align: center;">
                        <div class="max-w-7 max-h-7 shrink"></div>
                        <div class="w-px h-6 shrink-0 mx-6 bg-white/20 hidden sm:block"></div>
                        <div class="flex items-center flex-1 overflow-hidden" style="-webkit-box-align: center; -webkit-mask-image: linear-gradient( to right, transparent 0%, black 16px, black calc(100% - 64px), transparent 100% );">
                            <div class="relative flex items-center overflow-x-hidden scroll-smooth shadow-none outline-none" style="-webkit-box-align: center;">
                                { #each constSkills as { text } }
                                    <div 
                                        class="
                                            relative carouselitem text-sm leading-normal whitespace-nowrap 
                                            h-8 px-4 cursor-pointer select-none items-center flex m-0
                                            "
                                    > { text } </div>
                                { /each }
                            </div>
                        </div>
                        <button class="prev h-8 w-8 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98" class="rotate-180">
                                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                            </svg>
                        </button>
                        <button class="next h-8 w-8 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98">
                                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    </section>

<!-- --------------------------------------- -->

<style type="postcss">

    .is-pinned { 
        background: rgb(19, 19, 21);
        border-color: rgb(34, 35, 38);
    }

    /* --- */

    .fondg1 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: linear-gradient(124.31deg, rgb(70, 227, 183) 0.18%, rgb(82, 124, 172) 89.82%);
        pointer-events: none;
        filter: blur(30px);
        opacity: 0.7; 
    }

    .fondg2 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: linear-gradient(285.49deg, rgb(245, 55, 249) -14.61%, rgb(247, 190, 43) 106.06%);
        pointer-events: none;
        filter: blur(30px);
        opacity: 0.7;
        overflow: visible;
    }

    .fondg3 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: linear-gradient(285.49deg, rgb(148, 151, 157) -14.61%, rgb(118, 124, 175) 106.06%);
        pointer-events: none;
        filter: blur(30px);
        opacity: 0.7;
        overflow: visible;
    }

    .fondg4 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: linear-gradient(90deg, rgb(255, 248, 85) 0.04%, rgb(70, 227, 183) 46.04%);
        pointer-events: none;
        filter: blur(30px);
        opacity: 0.7;
        overflow: visible;
    }

    .lineitem1, .lineitem2, .lineitem3 {
        box-shadow: rgb(255 255 255 / 25%) 0px 1px 1px 0px inset;
        background: linear-gradient(155.91deg, rgb(24, 25, 28) 21.92%, rgb(33, 34, 37) 77.49%);
        @apply will-change-transform relative
    } 

    .contlines::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0px;
        background: linear-gradient(270deg, rgb(27, 31, 36) 2%, rgba(27, 31, 36, 0) 100%);
        transform: rotate(-180deg);
        will-change: transform;
        width: 165px;
        height: 100%;
        z-index: 1;
    }

    .contlines::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0px;
        background: linear-gradient(270deg, rgb(27, 31, 36) 2%, rgba(27, 31, 36, 0) 100%);
        width: 165px;
        height: 100%;
        z-index: 1;
    }

    .cont::after {
        /* content: "";
        position: absolute;
        right: 50px;
        top: 0px;
        background: linear-gradient(270deg, rgb(27, 31, 36) 2%, rgba(27, 31, 36, 0) 100%);
        width: 165px;
        height: 100%;
        z-index: 1;   */
    }

</style>