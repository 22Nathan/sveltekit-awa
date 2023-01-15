/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '2rem',
				sm: '3rem',
				lg: '8rem',
			}
		},
		extend: {
			colors: {
				/* eerie black  #1b1f24 */ 'awa-1': 'rgba(27, 31, 36, 1)',
				/* white        #ffffff */ 'awa-2': 'rgba(255, 255, 255, 1)',
				/* aquamarine   #89f7bd */ 'awa-3': 'rgba(137, 247, 189, 1)',
				/* purple       #a77bf3 */ 'awa-4': 'rgba(167, 123, 243, 1)',
				/* dark purple  #2b2344 */ 'awa-5': 'rgba(43, 35, 68, 1)',
			},
			keyframes: {

				'awa-text-gradient': {
					'from': { 'background-position': '0% center', },
					'to'  : { 'background-position': '-200% center', },
				},

				'awa-spin': {
					'to': { transform: 'rotate(1turn)', },
				},
		  
				'awa-spin-reverse-slower': {
					'to': { transform: 'rotate(-1turn)', },
				},

				'awa-btn-border': {
					'0%': { transform: 'scaleX(8) scaleY(1.5) rotate(0deg)',   opacity: '1', },
					'to': { transform: 'scaleX(8) scaleY(1.5) rotate(1turn)',  opacity: '1', },
				},

			},
			animation: {

				'awa-text-gradient': 		'awa-text-gradient 5s linear infinite',
				'awa-spin': 				'awa-spin 4s linear infinite',
				'awa-spin-reverse-slower': 	'awa-spin-reverse-slower 6s linear infinite',
				'awa-btn-border':			'awa-btn-border 5s linear infinite',

			},
		},
	},
	plugins: []
};
