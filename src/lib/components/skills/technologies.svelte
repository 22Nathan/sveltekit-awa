

<script>
// @ts-nocheck


    // ---------------------------------------
    // IMPORT

    import { onMount } from "svelte"
    import gsap from "gsap"
    import { horizontalLoop } from "$lib/js/horizontalLoop"
    import { horizontalLoopSlider } from "$lib/js/horizontalLoopSlider"
    import { constSkillsIcons } from "$lib/const/const"

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
        const loop = horizontalLoopSlider(all_carousel_item, {paused: true, draggable: true})

        all_carousel_item.forEach((carouselitem, i) => 
            carouselitem.addEventListener("click", () => 
                loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})
            )
        )

        document.querySelector(".next").addEventListener("click", () => loop.next({duration: 0.4, ease: "power1.inOut"}))
        document.querySelector(".prev").addEventListener("click", () => loop.previous({duration: 0.4, ease: "power1.inOut"}))

        function setMiddle(mid) {
            all_carousel_item.forEach( carouselitem => 
                carouselitem.classList.remove("middle-item")
            )
            all_carousel_item[mid].classList.add("middle-item");
        }

    }

    // ---------------------------------------
    // FUNCTIONS
    
    function is_element_sticky(){

        const el = document.querySelector(".sticky")
        const observer = new IntersectionObserver( 
            ([e]) => e.target.firstElementChild.classList.toggle("is-pinned", e.intersectionRatio < 1), { threshold: [1] }
        )
        observer.observe(el);

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
                
                <div class="relative flex items-center m-auto overflow-hidden h-8 px-8 bg-transparent border-y border-y-transparent duration-200">
                    <div class="relative flex m-auto w-full overflow-hidden max-w-[calc(100%-64px)]" style="-webkit-mask-image: linear-gradient( to right, transparent 0%, black 16px, black calc(100% - 24px), transparent 100% );">
                        
                        <button class="prev absolute top-0 left-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>                              
                        </button>
                        <button class="next absolute top-0 right-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>                              
                        </button>
                        
                        <div class="carouselitem text-sm">aaa</div>
                        <div class="carouselitem text-sm">bbb</div>
                        <div class="carouselitem text-sm">ccc</div>
                        <div class="carouselitem text-sm">ddd</div>
                        <div class="carouselitem text-sm">eee</div>
                        <div class="carouselitem text-sm">fff</div>
                        <div class="carouselitem text-sm">ggg</div>
                        <div class="carouselitem text-sm">hhh</div>
                        <div class="carouselitem text-sm">iii</div>
                        <div class="carouselitem text-sm">jjj</div>
                        <div class="carouselitem text-sm">kkk</div>
                        <div class="carouselitem text-sm">lll</div>
                        <div class="carouselitem text-sm">mmm</div>
                        <div class="carouselitem text-sm">nnn</div>
                        <div class="carouselitem text-sm">ooo</div>
                        <div class="carouselitem text-sm">ppp</div>

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

</style>