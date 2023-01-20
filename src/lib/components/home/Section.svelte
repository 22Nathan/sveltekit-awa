
<script>

    import CardArrow from "$lib/components-sub/CardArrow.svelte"

</script>

<!-- --------------------------------------- -->

    <section class="flex container mx-auto mb-24 lg:mb-48" id="section1">
        <div class="awa-section-sidebar awa-exposed-line">
            <span class="awa-step-circle relative z-30">
                I
            </span>
        </div>
        <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12 lg:gap-y-24">
            <header>
                <h2 class="title text-4xl md:text-6xl mb-8 relative z-30 animatable animate-fade-right in-viewport">
                    About-me
                </h2>
                <p class="section-subhead mix-blend-color-dodge relative z-30 animatable animate-fade-right max-w-[350px] in-viewport">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Sequi nihil, cumque accusamus rem debitis labore nemo. 
                    Consectetur doloremque eos architecto sapiente numquam dignissimos 
                    praesentium provident suscipit, aperiam sunt voluptatum ipsum.
                </p>
            </header>
            <div class="relative z-30 animatable animate-fade-up in-viewport">
                <a href="/about-me" rel="noreferrer" class="awa-card-transparent-blur block h-full group">
                    <CardArrow/>
                    <h3 class="title text-3xl mb-4">
                        4 ways to improve your frontend workflow
                    </h3>
                    <p class="mb-8 max-w-[360px]">
                        Learn what makes a healthy Web development workflow and how Vercel 
                        accelerates that journey at every stage while making the 
                        developer experience genuinely great.
                    </p>
                </a>
            </div>
        </div>
    </section>

<!-- --------------------------------------- -->

<style type="postcss">

</style>