/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	safelist: ['pl-24', 'pl-40', 'pl-56', 'pl-72', 'pl-80'],
	presets: [],
	darkMode: 'class', // or 'class'
	theme: {
		accentColor: ({ theme }) => ({
			...theme('colors'),
			auto: 'auto',
		}),
		animation: {
			none: 'none',
			spin: 'spin 1s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			bounce: 'bounce 1s infinite',
		},
		aria: {
			checked: 'checked="true"',
			disabled: 'disabled="true"',
			expanded: 'expanded="true"',
			hidden: 'hidden="true"',
			pressed: 'pressed="true"',
			readonly: 'readonly="true"',
			required: 'required="true"',
			selected: 'selected="true"',
		},
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
		},
		backdropBlur: ({ theme }) => theme('blur'),
		backdropBrightness: ({ theme }) => theme('brightness'),
		backdropContrast: ({ theme }) => theme('contrast'),
		backdropGrayscale: ({ theme }) => theme('grayscale'),
		backdropHueRotate: ({ theme }) => theme('hueRotate'),
		backdropInvert: ({ theme }) => theme('invert'),
		backdropOpacity: ({ theme }) => theme('opacity'),
		backdropSaturate: ({ theme }) => theme('saturate'),
		backdropSepia: ({ theme }) => theme('sepia'),
		backgroundColor: ({ theme }) => theme('colors'),
		backgroundImage: {
			none: 'none',
			'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
			'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
			'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
			'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
			'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
			'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
			'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
			'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
		},
		backgroundOpacity: ({ theme }) => theme('opacity'),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		blur: {
			0: '0',
			none: '0',
			sm: '4px',
			DEFAULT: '8px',
			md: '12px',
			lg: '16px',
			xl: '24px',
			'2xl': '40px',
			'3xl': '64px',
		},
		borderColor: ({ theme }) => ({
			...theme('colors'),
			DEFAULT: theme('colors.gray.200', 'currentColor'),
		}),
		borderOpacity: ({ theme }) => theme('opacity'),
		borderRadius: {
			none: '0px',
			sm: '.2rem',
			DEFAULT: '.4rem',
			md: '.6rem',
			lg: '.8rem',
			xl: '1.2rem',
			'2xl': '1.6rem',
			'3xl': '2.4rem',
			full: '9999px',
			0: '0px',
			2: '.2rem',
			4: '.4rem',
			6: '.6rem',
			8: '.8rem',
			12: '1.2rem',
			16: '1.6rem',
			20: '2rem',
			24: '2.4rem',
			28: '2.8rem',
			32: '3.2rem',
		},
		borderSpacing: ({ theme }) => ({
			...theme('spacing'),
		}),
		borderWidth: {
			DEFAULT: '1px',
			0: '0px',
			1: '1px',
			2: '2px',
			3: '3px',
			4: '4px',
			8: '8px',
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
			none: 'none',
			0: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
			1: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
			2: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
			3: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
			4: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
			5: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
			6: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
			7: '0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
			8: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
			9: '0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
			10: '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
			11: '0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
			12: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
			13: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
			14: '0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
			15: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
			16: '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
			17: '0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
			18: '0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
			19: '0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
			20: '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
			21: '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
			22: '0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
			23: '0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
			24: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
		},
		boxShadowColor: ({ theme }) => theme('colors'),
		brightness: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
			200: '2',
		},
		caretColor: ({ theme }) => theme('colors'),
		colors: ({ colors }) => ({
			inherit: colors.inherit,
			current: colors.current,
			transparent: 'transparent',
			black: '#22292F',
			white: '#fff',
		}),
		columns: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			'3xs': '16rem',
			'2xs': '18rem',
			xs: '32rem',
			sm: '48rem',
			md: '64rem',
			lg: '80rem',
			xl: '57.6rem',
			'2xl': '65.6rem',
			'3xl': '76.8rem',
			'4xl': '89.6rem',
			'5xl': '102.4rem',
			'6xl': '115.2rem',
			'7xl': '128rem',
		},
		container: {},
		content: {
			none: 'none',
		},
		contrast: {
			0: '0',
			50: '.5',
			75: '.75',
			100: '1',
			125: '1.25',
			150: '1.5',
			200: '2',
		},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			help: 'help',
			'not-allowed': 'not-allowed',
			none: 'none',
			'context-menu': 'context-menu',
			progress: 'progress',
			cell: 'cell',
			crosshair: 'crosshair',
			'vertical-text': 'vertical-text',
			alias: 'alias',
			copy: 'copy',
			'no-drop': 'no-drop',
			grab: 'grab',
			grabbing: 'grabbing',
			'all-scroll': 'all-scroll',
			'col-resize': 'col-resize',
			'row-resize': 'row-resize',
			'n-resize': 'n-resize',
			'e-resize': 'e-resize',
			's-resize': 's-resize',
			'w-resize': 'w-resize',
			'ne-resize': 'ne-resize',
			'nw-resize': 'nw-resize',
			'se-resize': 'se-resize',
			'sw-resize': 'sw-resize',
			'ew-resize': 'ew-resize',
			'ns-resize': 'ns-resize',
			'nesw-resize': 'nesw-resize',
			'nwse-resize': 'nwse-resize',
			'zoom-in': 'zoom-in',
			'zoom-out': 'zoom-out',
		},
		divideColor: ({ theme }) => theme('borderColor'),
		divideOpacity: ({ theme }) => theme('borderOpacity'),
		divideWidth: ({ theme }) => theme('borderWidth'),
		dropShadow: {
			sm: '0 1px 1px rgba(0,0,0,0.05)',
			DEFAULT: ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)'],
			md: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'],
			lg: ['0 10px 8px rgba(0, 0, 0, 0.04)', '0 4px 3px rgba(0, 0, 0, 0.1)'],
			xl: ['0 20px 13px rgba(0, 0, 0, 0.03)', '0 8px 5px rgba(0, 0, 0, 0.08)'],
			'2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
			none: '0 0 #0000',
		},
		fill: ({ theme }) => ({
			none: 'none',
			...theme('colors'),
		}),
		flex: {
			1: '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexBasis: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
		}),
		flexGrow: {
			0: '0',
			DEFAULT: '1',
		},
		flexShrink: {
			0: '0',
			DEFAULT: '1',
		},
		fontFamily: {
			sans: [
				'Inter var',
				'Roboto',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		fontSize: {
			xs: '1rem',
			sm: '1.2rem',
			md: '1.3rem',
			base: '1.4rem',
			lg: '1.6rem',
			xl: '1.8rem',
			'2xl': '2rem',
			'3xl': '2.4rem',
			'4xl': '3.2rem',
			'5xl': '3.6rem',
			'6xl': '4rem',
			'7xl': '4.8rem',
			'8xl': '6.4rem',
			'9xl': '9.6rem',
			'10xl': '12.8rem',
			10: ['1rem'],
			11: ['1.1rem'],
			12: ['1.2rem'],
			13: ['1.3rem'],
			14: ['1.4rem'],
			15: ['1.5rem'],
			16: ['1.6rem'],
			17: ['1.7rem'],
			18: ['1.8rem'],
			19: ['1.9rem'],
			20: ['2rem'],
			24: ['2.4rem'],
			28: ['2.8rem'],
			32: ['3.2rem'],
			36: ['3.6rem'],
			40: ['4rem'],
			44: ['4.4rem'],
			48: ['4.8rem'],
			52: ['5.2rem'],
			56: ['5.6rem'],
			60: ['6rem'],
			64: ['6.4rem'],
			68: ['6.8rem'],
			72: ['7.2rem'],
			96: ['9.6rem'],
			128: ['12.8rem'],
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
			100: '100',
			200: '200',
			300: '300',
			400: '400',
			500: '500',
			600: '600',
			700: '700',
			800: '800',
			900: '900',
		},
		gap: ({ theme }) => theme('spacing'),
		gradientColorStops: ({ theme }) => theme('colors'),
		gradientColorStopPositions: {
			'0%': '0%',
			'5%': '5%',
			'10%': '10%',
			'15%': '15%',
			'20%': '20%',
			'25%': '25%',
			'30%': '30%',
			'35%': '35%',
			'40%': '40%',
			'45%': '45%',
			'50%': '50%',
			'55%': '55%',
			'60%': '60%',
			'65%': '65%',
			'70%': '70%',
			'75%': '75%',
			'80%': '80%',
			'85%': '85%',
			'90%': '90%',
			'95%': '95%',
			'100%': '100%',
		},
		grayscale: {
			0: '0',
			DEFAULT: '100%',
		},
		gridAutoColumns: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)',
		},
		gridAutoRows: {
			auto: 'auto',
			min: 'min-content',
			max: 'max-content',
			fr: 'minmax(0, 1fr)',
		},
		gridColumn: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-7': 'span 7 / span 7',
			'span-8': 'span 8 / span 8',
			'span-9': 'span 9 / span 9',
			'span-10': 'span 10 / span 10',
			'span-11': 'span 11 / span 11',
			'span-12': 'span 12 / span 12',
			'span-full': '1 / -1',
		},
		gridColumnEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridColumnStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
		},
		gridRow: {
			auto: 'auto',
			'span-1': 'span 1 / span 1',
			'span-2': 'span 2 / span 2',
			'span-3': 'span 3 / span 3',
			'span-4': 'span 4 / span 4',
			'span-5': 'span 5 / span 5',
			'span-6': 'span 6 / span 6',
			'span-full': '1 / -1',
		},
		gridRowEnd: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
		},
		gridRowStart: {
			auto: 'auto',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
		},
		gridTemplateColumns: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
			7: 'repeat(7, minmax(0, 1fr))',
			8: 'repeat(8, minmax(0, 1fr))',
			9: 'repeat(9, minmax(0, 1fr))',
			10: 'repeat(10, minmax(0, 1fr))',
			11: 'repeat(11, minmax(0, 1fr))',
			12: 'repeat(12, minmax(0, 1fr))',
		},
		gridTemplateRows: {
			none: 'none',
			1: 'repeat(1, minmax(0, 1fr))',
			2: 'repeat(2, minmax(0, 1fr))',
			3: 'repeat(3, minmax(0, 1fr))',
			4: 'repeat(4, minmax(0, 1fr))',
			5: 'repeat(5, minmax(0, 1fr))',
			6: 'repeat(6, minmax(0, 1fr))',
		},
		height: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		}),
		hueRotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-60': '-60deg',
			'-30': '-30deg',
			'-15': '-15deg',
			0: '0deg',
			15: '15deg',
			30: '30deg',
			60: '60deg',
			90: '90deg',
			180: '180deg',
		},
		inset: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
			'-1/2': '-50%',
			'-1/3': '-33.333333%',
			'-2/3': '-66.666667%',
			'-1/4': '-25%',
			'-2/4': '-50%',
			'-3/4': '-75%',
			'-full': '-100%',
		}),
		invert: {
			0: '0',
			DEFAULT: '100%',
		},
		keyframes: {
			spin: {
				to: {
					transform: 'rotate(360deg)',
				},
			},
			ping: {
				'75%, 100%': {
					transform: 'scale(2)',
					opacity: '0',
				},
			},
			pulse: {
				'50%': {
					opacity: '.5',
				},
			},
			bounce: {
				'0%, 100%': {
					transform: 'translateY(-25%)',
					animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
				},
				'50%': {
					transform: 'none',
					animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
				},
			},
		},
		letterSpacing: {
			tighter: '-0.05em',
			tight: '-0.025em',
			normal: '0em',
			wide: '0.025em',
			wider: '0.05em',
			widest: '0.1em',
		},
		lineHeight: {
			none: '1',
			tight: '1.25',
			snug: '1.375',
			normal: '1.5',
			relaxed: '1.625',
			loose: '2',
			3: '1.2rem',
			4: '1.6rem',
			5: '2rem',
			6: '2.4rem',
			7: '2.8rem',
			8: '3.2rem',
			9: '3.6rem',
			10: '4rem',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
		},
		listStyleImage: {
			none: 'none',
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		lineClamp: {
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
		},
		maxHeight: ({ theme }) => ({
			none: 'none',
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			auto: 'auto',
		}),
		maxWidth: (theme, { breakpoints }) => ({
			none: 'none',
			...theme('spacing'),
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
			prose: '65ch',
			...breakpoints(theme('screens')),
		}),
		minHeight: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			full: '100%',
			screen: '100vh',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		}),
		minWidth: ({ theme }) => ({
			...theme('spacing'),
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			screen: '100vw',
			fit: 'fit-content',
		}),
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		opacity: {
			0: '0',
			5: '0.05',
			10: '0.1',
			20: '0.2',
			25: '0.25',
			30: '0.3',
			40: '0.4',
			50: '0.5',
			60: '0.6',
			70: '0.7',
			75: '0.75',
			80: '0.8',
			90: '0.9',
			95: '0.95',
			100: '1',
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
		},
		outlineColor: ({ theme }) => theme('colors'),
		outlineOffset: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		outlineWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		padding: ({ theme }) => theme('spacing'),
		placeholderColor: ({ theme }) => theme('colors'),
		placeholderOpacity: ({ theme }) => theme('opacity'),
		ringColor: ({ theme }) => ({
			DEFAULT: theme('colors.blue.500', '#3b82f6'),
			...theme('colors'),
		}),
		ringOffsetColor: ({ theme }) => theme('colors'),
		ringOffsetWidth: {
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		ringOpacity: ({ theme }) => ({
			DEFAULT: '0.5',
			...theme('opacity'),
		}),
		ringWidth: {
			DEFAULT: '3px',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		rotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-45': '-45deg',
			'-12': '-12deg',
			'-6': '-6deg',
			'-3': '-3deg',
			'-2': '-2deg',
			'-1': '-1deg',
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
			45: '45deg',
			90: '90deg',
			180: '180deg',
		},
		saturate: {
			0: '0',
			50: '.5',
			100: '1',
			150: '1.5',
			200: '2',
		},
		scale: {
			0: '0',
			50: '.5',
			75: '.75',
			90: '.9',
			95: '.95',
			100: '1',
			105: '1.05',
			110: '1.1',
			125: '1.25',
			150: '1.5',
		},
		screens: {
			sm: '600px',
			md: '960px',
			lg: '1280px',
			xl: '1920px',
			print: { raw: 'print' },
		},
		scrollMargin: ({ theme }) => ({
			...theme('spacing'),
		}),
		scrollPadding: ({ theme }) => theme('spacing'),
		sepia: {
			0: '0',
			DEFAULT: '100%',
		},
		skew: {
			'-12': '-12deg',
			'-6': '-6deg',
			'-3': '-3deg',
			'-2': '-2deg',
			'-1': '-1deg',
			0: '0deg',
			1: '1deg',
			2: '2deg',
			3: '3deg',
			6: '6deg',
			12: '12deg',
		},
		space: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing')),
		}),
		spacing: {
			xs: '32rem',
			sm: '48rem',
			md: '64rem',
			lg: '80rem',
			xl: '96rem',
			'2xl': '65.6rem',
			'3xl': '76.8rem',
			'4xl': '89.6rem',
			'5xl': '102.4rem',
			'6xl': '115.2rem',
			'7xl': '128rem',
			px: '1px',
			0: '0px',
			0.5: '0.05rem',
			1: '0.1rem',
			1.5: '0.15rem',
			2: '0.2rem',
			2.5: '0.25rem',
			3: '0.3rem',
			3.5: '0.35rem',
			4: '0.4rem',
			5: '0.5rem',
			6: '0.6rem',
			7: '0.7rem',
			8: '0.8rem',
			9: '0.9rem',
			10: '1.0rem',
			11: '1.1rem',
			12: '1.2rem',
			14: '1.4rem',
			16: '1.6rem',
			20: '2rem',
			24: '2.4rem',
			28: '2.8rem',
			32: '3.2rem',
			36: '3.6rem',
			40: '4rem',
			44: '4.4rem',
			48: '4.8rem',
			52: '5.2rem',
			56: '5.6rem',
			60: '6rem',
			64: '6.4rem',
			68: '6.8rem',
			72: '7.2rem',
			76: '7.6rem',
			80: '8rem',
			84: '8.4rem',
			88: '8.8rem',
			92: '9.2rem',
			96: '9.6rem',
			112: '11.2rem',
			120: '12rem',
			128: '12.8rem',
			136: '13.6rem',
			144: '14.4rem',
			160: '16rem',
			192: '19.2rem',
			200: '20rem',
			208: '20.8rem',
			216: '21.6rem',
			224: '22.4rem',
			256: '25.6rem',
			288: '28.8rem',
			320: '32rem',
			360: '36rem',
			384: '38.4rem',
			400: '40rem',
			480: '48rem',
			512: '51.2rem',
			640: '64rem',
		},
		stroke: ({ theme }) => ({
			none: 'none',
			...theme('colors'),
		}),
		strokeWidth: {
			0: '0',
			1: '1',
			2: '2',
		},
		supports: {},
		data: {},
		textColor: ({ theme }) => theme('colors'),
		textDecorationColor: ({ theme }) => theme('colors'),
		textDecorationThickness: {
			auto: 'auto',
			'from-font': 'from-font',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		textIndent: ({ theme }) => ({
			...theme('spacing'),
		}),
		textOpacity: ({ theme }) => theme('opacity'),
		textUnderlineOffset: {
			auto: 'auto',
			0: '0px',
			1: '1px',
			2: '2px',
			4: '4px',
			8: '8px',
		},
		transformOrigin: {
			center: 'center',
			top: 'top',
			'top-right': 'top right',
			right: 'right',
			'bottom-right': 'bottom right',
			bottom: 'bottom',
			'bottom-left': 'bottom left',
			left: 'left',
			'top-left': 'top left',
		},
		transitionDelay: {
			0: '0s',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms',
		},
		transitionDuration: {
			DEFAULT: '150ms',
			0: '0s',
			75: '75ms',
			100: '100ms',
			150: '150ms',
			200: '200ms',
			300: '300ms',
			500: '500ms',
			700: '700ms',
			1000: '1000ms',
		},
		transitionProperty: {
			none: 'none',
			all: 'all',
			DEFAULT:
				'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
			colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
			opacity: 'opacity',
			shadow: 'box-shadow',
			transform: 'transform',
		},
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			linear: 'linear',
			in: 'cubic-bezier(0.4, 0, 1, 1)',
			out: 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},
		translate: (theme, { negative }) => ({
			...theme('spacing'),
			...negative(theme('spacing')),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			full: '100%',
			'-1/2': '-50%',
			'-1/3': '-33.333333%',
			'-2/3': '-66.666667%',
			'-1/4': '-25%',
			'-2/4': '-50%',
			'-3/4': '-75%',
			'-full': '-100%',
		}),
		width: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
			min: 'min-content',
			max: 'max-content',
			fit: 'fit-content',
		}),
		willChange: {
			auto: 'auto',
			scroll: 'scroll-position',
			contents: 'contents',
			transform: 'transform',
		},
		zIndex: {
			auto: 'auto',
			'-1': -1,
			0: '0',
			10: '10',
			20: '20',
			30: '30',
			40: '40',
			50: '50',
			99: '99',
			999: '999',
			9999: '9999',
		},
		extend: {
			// @tailwindcss/typography
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						fontSize: '1.4rem',
					},
				},
				sm: {
					css: {
						fontSize: '1.2rem',
					},
				},
				lg: {
					css: {
						fontSize: '1.6rem',
					},
				},
			}),
		},
	},
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'empty',
		'read-only',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled',
	],
	plugins: [
		require('@tailwindcss/typography')({ modifiers: ['sm', 'lg'] }),
		require('@tailwindcss/aspect-ratio'),
	],
};
