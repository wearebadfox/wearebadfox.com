module.exports = {
    theme: {
        fontFamily: {
            default: ['Jost', 'sans-serif'],
        },
        colors: {
            black: 'rgb(13, 13, 13)',
            white: 'rgb(255, 255, 255)',
        },
        linearGradientDirections: {
            b: 'to bottom',
            r: 'to right',
            l: 'to left',
        },
        linearGradientColors: {
        },
    },
    variants: {
        colors: ['hover', 'focus'],
        backgroundPosition: ['responsive', 'hover', 'focus'],
        linearGradients: ['hover', 'focus'],
        boxShadow: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'first', 'last'],
        margin: ['responsive', 'first', 'last'],
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-typography'),
    ],
};
