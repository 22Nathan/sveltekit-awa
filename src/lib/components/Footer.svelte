

<script>

    // ---------------------------------------
    // IMPORT

    import { page } from "$app/stores"
    import { constNav } from "$lib/const/const"

</script>

<!-- --------------------------------------- -->

    <footer class="bg-black/30 border-t border-white/10 py-10 relative z-30 backdrop-blur">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">

            <div class="text-sm text-gray-400 text-center lg:text-left">
                <div class="flex flex-col items-center pt-6">

                    <!-- 
                    <nav class="flex flex-wrap relative justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">

                        <a href="/" class="text-gray-300 hover:text-awa-2 transition duration-100" aria-current={$page.url.pathname === "/" ? 'page' : undefined}> Home </a>

                        { #each constNav as { url , text } }

                            <a 
                                href={ url } 
                                class="text-gray-300 hover:text-awa-2 transition duration-100"
                                aria-current={$page.url.pathname === url ? 'page' : undefined}
                            > 
                                { text } 
                            </a>

                        { /each }

                    </nav> 
                    -->

                </div>
            </div>

        </div>
    </footer>

<!-- --------------------------------------- -->

<style type="postcss">

    [aria-current='page'] {
        
    }

</style>