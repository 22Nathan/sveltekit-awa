
<script>

	import Counter from "$lib/components-sub/Counter.svelte"

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
            <div class="flex h-40 w-40 rounded-full border border-white/20 bg-white/10 items-center justify-center align-middle">
                <!-- <svg class="relative m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" />
                    <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" />
                    <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" />
                </svg> -->
                <Counter/>
            </div>
        </div>

        <div class="pl-0">
            <div 
                class="
                    relative py-32
                    before:absolute before:inset-0 before:mx-auto before:h-full before:w-px 
                    before:bg-gradient-to-b before:from-white/20 before:via-white/10"
            >
            </div>
        </div>

    </header>

<!-- --------------------------------------- -->

<style type="postcss">

</style>