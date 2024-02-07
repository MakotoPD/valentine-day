export default defineNuxtConfig({
	app: {
		head: {
			title: 'Czy zostaniesz moją walentynką?',
			htmlAttrs: {
				lang: 'pl',
			},
			meta: [{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'format-detection',
					content: 'telephone=no'
				},
				{
					name: 'og:image',
					content: '/og.png'
				}
			],
			link: [{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.png'
				},
				{
					rel: 'stylesheet',
					href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
					media: 'print', 
					onload: 'this.media="all"'
				}
			],
		},

	},

	modules: [
		'@nuxtjs/tailwindcss', //css framework
		'@nuxtjs/google-fonts', //google fonts
	],

	devtools: { enabled: true },


	tailwindcss: {
		configPath: 'tailwind.config',
	},


	builder: 'vite', //webpack alternative for nuxtjs/vuejs

	googleFonts: {
		display: 'swap',
		families: {
			Roboto: true,
		}
	},

	css: [
		'@/assets/css/global.css',
	]
})