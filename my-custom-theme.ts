import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base':
			"Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-family-heading':
			"Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0FBA81
		'--color-primary-50': '219 245 236', // #dbf5ec
		'--color-primary-100': '207 241 230', // #cff1e6
		'--color-primary-200': '195 238 224', // #c3eee0
		'--color-primary-300': '159 227 205', // #9fe3cd
		'--color-primary-400': '87 207 167', // #57cfa7
		'--color-primary-500': '15 186 129', // #0FBA81
		'--color-primary-600': '14 167 116', // #0ea774
		'--color-primary-700': '11 140 97', // #0b8c61
		'--color-primary-800': '9 112 77', // #09704d
		'--color-primary-900': '7 91 63', // #075b3f
		// secondary | #4740d4
		'--color-secondary-50': '227 226 249', // #e3e2f9
		'--color-secondary-100': '218 217 246', // #dad9f6
		'--color-secondary-200': '209 207 244', // #d1cff4
		'--color-secondary-300': '181 179 238', // #b5b3ee
		'--color-secondary-400': '126 121 225', // #7e79e1
		'--color-secondary-500': '71 64 212', // #4740d4
		'--color-secondary-600': '64 58 191', // #403abf
		'--color-secondary-700': '53 48 159', // #35309f
		'--color-secondary-800': '43 38 127', // #2b267f
		'--color-secondary-900': '35 31 104', // #231f68
		// tertiary | #0EA5E9
		'--color-tertiary-50': '219 242 252', // #dbf2fc
		'--color-tertiary-100': '207 237 251', // #cfedfb
		'--color-tertiary-200': '195 233 250', // #c3e9fa
		'--color-tertiary-300': '159 219 246', // #9fdbf6
		'--color-tertiary-400': '86 192 240', // #56c0f0
		'--color-tertiary-500': '14 165 233', // #0EA5E9
		'--color-tertiary-600': '13 149 210', // #0d95d2
		'--color-tertiary-700': '11 124 175', // #0b7caf
		'--color-tertiary-800': '8 99 140', // #08638c
		'--color-tertiary-900': '7 81 114', // #075172
		// success | #84CC16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84CC16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #9c285f
		'--color-error-50': '240 223 231', // #f0dfe7
		'--color-error-100': '235 212 223', // #ebd4df
		'--color-error-200': '230 201 215', // #e6c9d7
		'--color-error-300': '215 169 191', // #d7a9bf
		'--color-error-400': '186 105 143', // #ba698f
		'--color-error-500': '156 40 95', // #9c285f
		'--color-error-600': '140 36 86', // #8c2456
		'--color-error-700': '117 30 71', // #751e47
		'--color-error-800': '94 24 57', // #5e1839
		'--color-error-900': '76 20 47', // #4c142f
		// surface | #33384C
		'--color-surface-50': '224 225 228', // #e0e1e4
		'--color-surface-100': '214 215 219', // #d6d7db
		'--color-surface-200': '204 205 210', // #cccdd2
		'--color-surface-300': '173 175 183', // #adafb7
		'--color-surface-400': '112 116 130', // #707482
		'--color-surface-500': '51 56 76', // #33384C
		'--color-surface-600': '46 50 68', // #2e3244
		'--color-surface-700': '38 42 57', // #262a39
		'--color-surface-800': '31 34 46', // #1f222e
		'--color-surface-900': '25 27 37' // #191b25
	}
};
