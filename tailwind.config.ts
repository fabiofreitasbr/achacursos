import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    colors: {
      black: '#050505',
      blue: {
        500: '#0085FF',
        700: '#0065DF',
      },
      gray: {
        100: '#efefef', // Mesmo que white
        200: '#e1e1e1',
        300: '#b5b5b5', // Mesmo que white
        400: '#939393',
        500: '#7c7c7c', // Mesmo que white
        600: '#5e5e5e',
        700: '#424242', // Mesmo que white
        800: '#282828',
        900: '#141414',
      },
      white: 'white',
      transparent: 'transparent',
    },
    fontFamily: {
      brandon: 'brandon-grotesque',
      opensans: 'Open Sans',
    }
  },
  plugins: [],
}
export default config
