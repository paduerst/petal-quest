import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';

import { myCustomTheme } from './my-custom-theme';

const config = {
	darkMode: 'class',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('daisyui'),
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	],

	future: {
		hoverOnlyWhenSupported: true
	},

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
					primary: '#0fba81',
					'base-100': '#eee',
					'--btn-text-case': 'none'
				}
			}
		],
		logs: false,
		prefix: 'daisy-'
	}
} satisfies Config;

export default config;
