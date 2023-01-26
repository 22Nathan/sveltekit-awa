

<script>

    // ---------------------------------------
    // IMPORT

    import { onMount } from "svelte"
    import gsap from "gsap"
    import { horizontalLoopSlider } from "$lib/js/horizontalLoopSlider"
    import { constSkillsIcons } from "$lib/const/const"

    // ---------------------------------------
    // LET & CONST & VAR

    // ---------------------------------------
    // ONMOUNT
    
    onMount(()=>{
        gsap_marquee()
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

    // ---------------------------------------
    // FUNCTIONS

</script>

<!-- --------------------------------------- -->

    <section class="pt-28 pb-14 md:pb-16 md:pt-44 relative">

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

    </section>

<!-- --------------------------------------- -->

<style type="postcss">

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