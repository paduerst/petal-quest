/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
		require('daisyui')
	],

	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#0fba81',
					secondary: '#4f46e5',
					accent: '#0ea5e9',
					neutral: '#33384c',
					info: '#0ea5e9',
					success: '#84cc16',
					warning: '#eab308',
					error: '#d41976',
					'--btn-text-case': 'none'
				}
			},
			{
				statBlockContents: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					'base-100': '#eee',
					'--btn-text-case': 'none'
				}
			}
		],
		logs: false,
		prefix: 'daisy-'
	},

	future: {
		hoverOnlyWhenSupported: true
	}
};

module.exports = config;
