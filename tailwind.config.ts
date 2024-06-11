import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],

    theme: {
        container: {
            center: true,
            screens: {
                "xl": "1200px",
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                brandon: 'brandon-grotesque',
                opensans: 'Open Sans',
                body: ["brandon-grotesque"],
                sans: ["brandon-grotesque"],
                serif: ["brandon-grotesque"],
                mono: ["brandon-grotesque"],
                display: ["brandon-grotesque"],
                reading: ["Open Sans"],
            },
            colors: {
                blue: {
                    '500': '#0073c0',
                    '600': '#02558D',
                },
                red: {
                    '100': 'red',
                    '500': '#de2e2e',
                    '700': '#de2e2e',
                    '800': '#B42727',
                },
                gray: {
                    '100': '#f3f4f6',
                    '200': '#e3e4e6',
                    '300': '#cdcdcd',
                    '400': '#ababab',
                    '500': '#757575',
                },
                black: '#232323',
                white: 'white',
                transparent: 'transparent',
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                "categoria-1": "url(/img/categoria-1.png)",
                "categoria-2": "url(/img/categoria-2.png)",
                "categoria-3": "url(/img/categoria-3.png)",
                "categoria-4": "url(/img/categoria-4.png)",
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}
export default config