/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
		'./index.html',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))', /* Dark Olive Green from logo */
					foreground: 'hsl(var(--primary-foreground))', /* Light Beige for text on primary */
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))', /* Mustard Gold from logo */
					foreground: 'hsl(var(--secondary-foreground))', /* Dark Olive Green for text on secondary */
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))', /* Lighter shade of olive/beige */
					foreground: 'hsl(var(--muted-foreground))', /* Darker text for muted */
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', /* Lighter Mustard/Gold for accents */
					foreground: 'hsl(var(--accent-foreground))', /* Dark text for accent */
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
        brand: {
          olive: '#4A5C3D', // Dark Olive Green from logo text & key
          gold: '#B98F46', // Mustard Gold from logo olive fruit & star
          beige: '#F4EFE7', // Light Beige from logo background
          lightBeige: '#FAF6F0', // Even lighter beige for contrast
          darkText: '#3A4A32', // Darker shade of Olive for main text
          lightText: '#FBF9F7', // Off-white for text on dark backgrounds
        },
        beige: { // Keep for fallback/general use if needed, but prioritize brand colors
          light: '#FBF8F3',
          DEFAULT: '#F5EFE6',
          medium: '#E8DFD2',
          dark: '#D4C4B0',
        },
        brandGray: { // Keep for fallback or specific UI elements
          light: '#F0F0F0',
          DEFAULT: '#D9D9D9',
          dark: '#A9A9A9',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
		},
	},
	plugins: [require('tailwindcss-animate')],
};