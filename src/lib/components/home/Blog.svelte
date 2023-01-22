
<script>
    
    // ---------------------------------------
    // IMPORT    

    import { constBlog } from "$lib/const/const"
    import gsap from "gsap"
    import ScrollTrigger from "gsap/dist/ScrollTrigger"
    import { onMount } from "svelte"

    // ---------------------------------------
    // INIT

    gsap.registerPlugin(ScrollTrigger)

    // ---------------------------------------
    // ONMOUNT

    onMount(()=>{
        gsap_apparition_from_right()
    })

    // ---------------------------------------
    // GSAP
    
    function gsap_apparition_from_right(){

        const all_blog = document.querySelectorAll('.blog')
        all_blog.forEach(blog => {
            gsap.set(blog, {x:5000})
            ScrollTrigger.create({
                trigger: blog,
                start: "top 70%",
                onEnter: function() {
                    gsap.to(blog, {x:0, duration:.9})
                }
            })
        })

    }

</script>

<!-- --------------------------------------- -->

    <div class="py-12">
        <div class="container m-auto md:px-12 xl:px-6">

            <div class="mb-12 space-y-2 text-center">
                <h2 class="z-10 text-3xl font-bold md:text-4xl text-white">
                    Changelog
                </h2>
                <p class="text-gray-300 lg:mx-auto lg:w-6/12">
                    There are all news, events and projects updates
                </p>
            </div>

            { #each constBlog as { date , title , subtitle , img , tags } }

                <div class="blog lg:w-3/4 xl:w-2/4 lg:mx-auto">
                    <div class="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-transparent border border-transparent shadow-none hover:border-gray-700 hover:bg-gray-800 shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                        <div class="hidden sm:block sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl grayscale group-hover:grayscale-0">
                            <img
                                src="{img}"
                                alt="art cover"
                                loading="lazy"
                                width="1000"
                                height="667"
                                class="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 will-change-transform"
                            />
                        </div>
                        
                        <div class="sm:p-2 sm:pl-0 sm:w-4/6">
                            <span class="mt-4 mb-2 inline-block font-medium text-gray-500 sm:mt-0">
                                {date}
                            </span>
                            <h3 class="text-2xl font-semibold text-white">
                                {title}
                            </h3>
                            <p class="my-6 text-gray-300">
                                {subtitle}
                            </p>
                
                            <div class="flex flex-wrap gap-4 gap-y-2">

                                { #each tags as tag }

                                    <div class="px-3 py-1 rounded-full border text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-gray-700 cursor-pointer hover:text-white border-gray-700 text-gray-300">
                                        {tag}
                                    </div>
                                    
                                { /each }

                            </div>
                        </div>
                    </div>
                </div>
                
            { /each }
    
        </div>
    </div>
                                      

<!-- --------------------------------------- -->

<style type="postcss">

</style>