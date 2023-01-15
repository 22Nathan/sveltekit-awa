
<script>

    import { onMount } from "svelte"
    import { page } from '$app/stores';
    import { slide } from "svelte/transition"
    import { gsap } from "gsap"
    
    import getScroll    from "$lib/js/getScroll"
    import clickOutside from "$lib/js/clickOutside"

    import { constNav } from "$lib/const/const"
  
    let burger   = false
    let darkmode = true
    let foo      = false

    /** @type {Element} */
    let previous
    /** @type {Element} */
    let indicator
    /** @type {Element} */
    let indicatorMobile

    let tlActive = gsap.timeline()

    $: run = runAnimateNavMobile(burger)
  
    onMount(
        ()=>{    
            animateNav()

            foo = getScroll()
            window.onscroll = 
            function()
                { burger ? foo = true : foo = getScroll() }
        }
    )


    /** @param {boolean} x */
    function runAnimateNavMobile(x){
        if(!x) return
        setTimeout( () => animateNavMobile() , 100 )
    }

    function animateNav(){

        const nav = document.querySelector('#nav')
        const navItems = document.querySelectorAll('#nav a')

        if(!nav) return 

        gsap.set(".awa-slide" , { opacity:0 })

        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                move(item)
            })
            item.addEventListener('click', () => {
                active()
            })
        })

        nav.addEventListener('mouseenter', () => {
            appear()
        })

        nav.addEventListener('mouseleave', () => {
            disappear()
        })

        function appear(){
            gsap.fromTo(".awa-slide", 
                { opacity:0 }, 
                { opacity:1 , duration:.8 })
        }

        function disappear(){
            gsap.fromTo(".awa-slide", 
                { opacity:1 }, 
                { opacity:0 , duration:.8 })
        }

        function active(){
            if(tlActive.isActive())
                return
            tlActive.to(".awa-slide", { y:-3 , duration:.5 })
            tlActive.to(".awa-slide", { y:3 , duration:.5 })
            tlActive.to(".awa-slide", { y:0 , duration:.5 })
        }

        /** @param {Element} item */
        function move(item){

            if(!nav) return 

            let indicatorMiddle = indicator.getBoundingClientRect()['width']/2
            let from
            let to = item.getBoundingClientRect()['x'] + (item.getBoundingClientRect()['width']/2)

            if(previous)
                { from = indicator.getBoundingClientRect()['x'] + indicatorMiddle }
            else 
                { from = to }

            from += -nav.getBoundingClientRect()['x'] -indicatorMiddle
            to   += -nav.getBoundingClientRect()['x'] -indicatorMiddle

            gsap.fromTo(".awa-slide",
                { x:from },
                { x:to , duration:.8 })

            previous = item
        }


    }

    function animateNavMobile(){

        if(!burger) return

        const navMobile = document.querySelector('#navMobile')
        const navItemsMobile = document.querySelectorAll('#navMobile a')

        if(!navMobile) return

        gsap.set(".awa-slide-mobile", { opacity:0 })

        navItemsMobile.forEach(item => {
            item.addEventListener('mouseenter', () => {
                move(item)
            })
            item.addEventListener('click', () => {
                active()
            })
        })

        navMobile.addEventListener('mouseenter', () => {
            appear()
        })

        navMobile.addEventListener('mouseleave', () => {
            disappear()
        })

        function appear(){
            gsap.fromTo(".awa-slide-mobile", 
                { opacity:0 }, 
                { opacity:1 , duration:.8 })
        }

        function disappear(){
            gsap.fromTo(".awa-slide-mobile", 
                { opacity:1 }, 
                { opacity:0 , duration:.8 })
        }

        function active(){
            if(tlActive.isActive())
                return
            tlActive.to(".awa-slide-mobile", { x:-3 , duration:.5 })
            tlActive.to(".awa-slide-mobile", { x:3 , duration:.5 })
            tlActive.to(".awa-slide-mobile", { x:0 , duration:.5 })
        }

        /** @param {Element} item */
        function move(item){

            if(!navMobile) return

            let indicatorMobileMiddle = indicatorMobile.getBoundingClientRect()['height']/2
            let from
            let to = item.getBoundingClientRect()['y'] + (item.getBoundingClientRect()['height']/2)

            if(previous)
                { from = indicatorMobile.getBoundingClientRect()['y'] + indicatorMobileMiddle }
            else 
                { from = to }

            from += -navMobile.getBoundingClientRect()['y'] -indicatorMobileMiddle
            to   += -navMobile.getBoundingClientRect()['y'] -indicatorMobileMiddle

            gsap.fromTo(".awa-slide-mobile",
                { y:from },
                { y:to , duration:.8 })

            previous = item

        }

    }
  
</script>
  
<!-- --------------------------------------- -->

    <nav class="fixed border-b border-transparent transition-colors duration-300 py-5 top-0 inset-x-0 z-50" 
        class:awa-scrolled="{foo === true}"
        use:clickOutside
        on:click_outside={()=>burger=false}
        on:click_outside={()=>burger ? foo=true : foo=getScroll()}
    >
        <div class="container flex justify-between items-center px-4 mx-auto">
  
            <!-- mobile menu button -->
            <button 
                class="block lg:hidden group awa-btn"
                on:click={()=>burger=!burger}
                on:click={()=>burger ? foo=true : foo=getScroll()}
            >
                <div 
                    class="absolute inset-0 m-auto mt-[13px] h-0.5 w-[18px] rounded bg-gray-500 transition duration-300 group-hover:bg-slate-300"
                    class:awa-burger1="{burger === true}"
                >
                </div>
                <div 
                    class="absolute inset-0 m-auto mt-[21px] h-0.5 w-[18px] rounded bg-gray-500 transition duration-300 group-hover:bg-slate-300"
                    class:awa-burger2="{burger === true}"
                >
                </div>
            </button>
  
            <!-- logo -->
            <a 
                on:click={()=>burger=false}
                on:click={()=>burger ? foo=true : foo=getScroll()}
                href="/" 
                class="p-2 group"
            >
                <svg width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                    <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" class="fill-white group-hover:fill-[#394149] duration-300"></path>
                    <path d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z" class="fill-[#394149] group-hover:fill-white duration-300"></path> 
                </svg>
            </a>
  
            <!-- menu -->
            <nav 
                id="nav"
                class="text-gray-300 font-normal hidden lg:flex justify-between absolute w-[600px] left-[calc(50%-300px)] gap-1 select-none"
            >
                <div bind:this={indicator} class="awa-slide opacity-0 -top-4 absolute will-change-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.41421L6.41421 6L12.0711 11.6569L17.7279 6L19.1421 7.41421L12.0711 14.4853L5 7.41421Z" fill="currentColor" /><path d="M19 16.3432H5V18.3432H19V16.3432Z" fill="currentColor" /></svg>
                </div>
                { #each constNav as { url , text } }
                    <a 
                        aria-current={$page.url.pathname === url ? 'page' : undefined}
                        class="link p-2 uppercase duration-300 mix-blend-difference hover:text-awa-2" 
                        href="{ url }"
                    > 
                        { text } 
                    </a>
                { /each }
            </nav>
  
            <!-- theme button -->
            <button 
                class="group awa-btn"
                on:click={()=>darkmode=!darkmode}
            >
                { #if darkmode }
                    <svg xmlns="http://www.w3.org/2000/svg" class="transition awa-svg-sun" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                    </svg>
                { :else }
                    <svg xmlns="http://www.w3.org/2000/svg" class="transition awa-svg-moon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                { /if }
            </button>
  
        </div>
  
        <!-- mobile menu -->
        { #if burger }
            <div 
                id="navMobile"
                class="container lg:hidden grid grid-cols-1 px-10 mx-auto mt-5 text-gray-300 relative select-none"
                transition:slide
            >
                <div 
                    bind:this={indicatorMobile}
                    class="awa-slide-mobile absolute left-1 py-6 opacity-0 will-change-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z" fill="currentColor" /><path d="M16.3432 19V5H18.3432V19H16.3432Z" fill="currentColor" /></svg>
                </div>
                { #each constNav as { url , text } }
                    <a 
                        on:click={()=>burger=false}
                        on:click={()=>burger ? foo=true : foo=getScroll()}
                        aria-current={$page.url.pathname === url ? 'page' : undefined}
                        href="{ url }" 
                        class="py-6 relative duration-300 hover:text-awa-2 rounded-lg hover:translate-x-3"
                    >
                        { text } 
                    </a>
                { /each }
            </div>
        { /if }
  
    </nav>
  
  <!-- --------------------------------------- -->
  
<style type="postcss">
  
    .awa-scrolled {
        @apply
        border-[hsla(0,0%,100%,.1)] bg-[rgba(5,5,5,.5)] backdrop-blur-sm;
    }
  
    .awa-burger1 {
        @apply
        rotate-45 translate-y-1
    }
  
    .awa-burger2 {
        @apply
        -rotate-45 -translate-y-1
    }
  
    .awa-btn {
        @apply
        relative h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full 
        before:border before:bg-gradient-to-b before:transition-transform before:duration-300 
        hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 before:bg-gray-800
    }
  
    .awa-svg-sun {
        @apply
        relative m-auto h-5 w-5 fill-gray-500 duration-300 
        group-hover:rotate-180 group-hover:fill-yellow-400
    }
  
    .awa-svg-moon {
        @apply
        relative m-auto h-5 w-5 fill-gray-500 duration-300 
        group-hover:-rotate-90 group-hover:fill-blue-600
    }

    /* 
    .link[aria-current='page']::before {
        @apply
        content-[''] w-0 h-0 absolute top-0 left-[calc(50%-6px)] 
        border-[6px] border-transparent border-t-[6px] border-t-[#ff3e00]
        transition-transform duration-100
    } 
    */

    /*
    .awa-custom-btn-1 {
        all: unset;
        width: 100px;
        height: 30px;
        font-size: 16px;
        background: transparent;
        border: none;
        position: relative;
        color: #f0f0f0;
        cursor: pointer;
        z-index: 1;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .awa-custom-btn-1::before {
        transform: translate(0%, 0%);
        width: 100%;
        height: 100%;
        background: #28282d;
        border-radius: 10px;
    }

    .awa-custom-btn-1:hover::before {
        transform: translate(5%, 20%);
        width: 110%;
        height: 110%;
    }

    .awa-custom-btn-1::after {
        transform: translate(10px, 10px);
        width: 35px;
        height: 35px;
        background: #ffffff15;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 50px;
    }

    .awa-custom-btn-1:hover::after {
        border-radius: 10px;
        transform: translate(0, 0);
        width: 100%;
        height: 100%;
    }

    .awa-custom-btn-1::after, .awa-custom-btn-1::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -99999;
        transition: all 0.4s;
    } 
    */
  
</style>
