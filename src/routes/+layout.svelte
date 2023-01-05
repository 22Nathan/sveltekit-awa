
<script>

	import "../app.css"

	import { slide } from "svelte/transition";

	const navItems = [
		{ link : './about-me'   , text : 'about me'   },
		{ link : './experience' , text : 'experience' },
		{ link : './education'  , text : 'education'  },
		{ link : './skills'     , text : 'skills'     },
		{ link : './projects'   , text : 'projects'   },
		{ link : './contact'    , text : 'contact'    },
	]

	let expanded = false

</script>
	
	<header class="fixed">
		<nav class="container mx-auto flex justify-between items-center">

			<!-- logo -->
			<a href="/" class="" data-sveltekit-preload-data="hover">
				AWA
			</a>

			<!-- mobile nav btn -->
			<button 
				on:click={()=>{expanded=!expanded}}
				class:expanded={expanded}
				class="nav-button-mobile" 
				aria-label="Toggle navigation">
			</button> 
			
			<!-- mobile nav menu -->
			{ #if expanded }
			<div 
				transition:slide
				class="sm:hidden menu-mobile">
				{ #each navItems as { link , text } }
					<a href="{ link }" class="nav-link-mobile" data-sveltekit-preload-data="hover"> { text } </a>
				{ /each }
			</div> 
			{ /if }
			
			<!-- nav menu -->
			<div class="max-sm:hidden">
				{ #each navItems as { link , text } }
					{ #if text == "contact" }
						<a href="{ link }" class="nav-link" data-sveltekit-preload-data="hover">
							<svg viewBox="0 0 24 24" 
									class="mr-2 w-4" 
									fill="none" 
									shape-rendering="geometricPrecision" 
									stroke="currentColor" 
									stroke-linecap="round" 
									stroke-linejoin="round" 
									stroke-width="2">
								<path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path>
								<path d="M10 17l5-5-5-5"></path>
								<path d="M15 12H3"></path>
							</svg>
							{ text }
						</a>
					{ :else }
						<a href="{ link }" class="nav-link" data-sveltekit-preload-data="hover"> { text } </a>
					{ /if }
				{ /each }
			</div>

		</nav>
	</header>

	<slot></slot>

<style type="postcss">

	.menu-mobile {
		@apply fixed inset-0 flex flex-col items-center justify-center h-screen w-screen 
			   gap-4 py-20 bg-[rgba(0,0,0,0.8)] text-white backdrop-blur-md duration-200
	}

	.nav-link {
		@apply capitalize
	}

	.nav-link-mobile {
		@apply capitalize font-medium text-2xl
	}

	.nav-button-mobile {
		@apply relative h-12 w-12 sm:hidden
	}

	.nav-button-mobile:before {
		@apply -translate-y-1
	}

	.nav-button-mobile:after {
		@apply translate-y-1
	}

	.nav-button-mobile:before, 
	.nav-button-mobile:after {
		@apply absolute w-6 bg-current h-[2px] content-[""] left-[calc(50%-12px)] 
			   top-1/2 origin-center transition duration-300 ease-in-out
	}

	.nav-button-mobile.expanded:before {
		@apply translate-y-0 rotate-45
	}

	.nav-button-mobile.expanded:after {
		@apply translate-y-0 -rotate-45
	}

</style>