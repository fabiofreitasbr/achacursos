/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
        colors: {
            'blue': {
                '500': '#0073c0',
                '600': '#02558D',
            },
            'red': {
                '100': 'red',
                '500': '#de2e2e',
                '700': '#de2e2e',
                '800': '#B42727',
            },
            'gray': {
                '100': '#f3f4f6',
                '200': '#e3e4e6',
                '300': '#cdcdcd',
                '400': '#ababab',
                '500': '#757575',
            },
            'black': '#232323',
            'white': 'white',
            'transparent': 'transparent',
        },
        fontFamily: {
            body: ["brandon-grotesque"],
            sans: ["brandon-grotesque"],
            serif: ["brandon-grotesque"],
            mono: ["brandon-grotesque"],
            display: ["brandon-grotesque"],
            reading: ["Open Sans"],
        },
    },
};
