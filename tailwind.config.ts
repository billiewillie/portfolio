import type {Config} from 'tailwindcss'
import fluid, {extract, screens, fontSize} from 'fluid-tailwind'

export default {
    content: {
        files: [
            './pages/**/*.{js,ts,jsx,tsx,mdx}',
            './components/**/*.{js,ts,jsx,tsx,mdx}',
            './app/**/*.{js,ts,jsx,tsx,mdx}'
        ],
        extract
    },
    theme: {
        screens,
        fontSize,
        fontFamily: {
            sans: ['var(--font-base)', 'sans-serif'],
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'var(--text-primary)',
                },
                secondary: {
                    DEFAULT: 'var(--text-secondary)'
                },
                highlight: {
                    DEFAULT: 'var(--highlight)'
                },
                accent: {
                    DEFAULT: 'var(--accent)'
                },
                white: {
                    DEFAULT: 'var(--white)'
                },
                black: {
                    DEFAULT: 'var(--black)',
                    '800': 'var(--bg-800)',
                    '700': 'var(--bg-700)'
                },
                backdrop: {
                    DEFAULT: 'var(--backdrop)',
                }
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'var(--text-primary)',
                        a: {
                            color: 'var(--text-primary)',
                            '&:hover': {
                                color: 'var(--text-secondary)'
                            }
                        },
                        strong: {
                            color: 'var(--text-primary)',
                        },
                        'h1, h2, h3, h4, h5, h6': {
                            color: 'var(--text-primary)'
                        },
                        'p, li': {
                            color: 'var(--text-primary)'
                        }
                    },

                }
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px'
                }
            },
            aspectRatio: {
                '3/2': '3 / 2'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        fluid,
    ]
} satisfies Config
