/**
 * @see https://tailwindcss.com/docs/theme/#app
 */
module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '832px',
            lg: '1024px',
            xl: '1280px',
            portrait: {
                raw: '(orientation: portrait)',
            },
        },
        fontFamily: {
            sans: ['Khula', 'sans-serif'],
            title: ['Raleway', 'sans-serif'],
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            none: '0',
            '3/2': '150%',
        },
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            right: 'right',
            top: 'top',
            'left-12': '12rem',
            'left--14': '-14rem',
        },
        colors: {
            black: '#121212',
            white: '#fff',
            gray: {
                100: '#fafafa',
                200: '#f0f2f5',
                300: '#d7dde5',
                400: '#c5cdd8',
            },
            cherry: '#eb3349',
            orange: '#f25f44',
            purple: '#8f26d9',
        },
        linearGradientDirections: {
            b: 'to bottom',
            r: 'to right',
            l: 'to left',
        },
        linearGradientColors: {
            wiretrap: ['#f25f44', '#eb3349 65%', '#8f26d9'],
            cherry: {
                orange: ['#f25f44', '#eb3349'],
                purple: ['#eb3349', '#8f26d9'],
            },
            transparent: {
                full: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)'],
                white: ['#fff 50%', 'rgba(255, 255, 255, 0.8)'],
            },
        },
        boxShadow: {
            backdrop: '0 10px 30px 7px rgba(244, 47, 74, 0.25)',
            'backdrop-lg': '0 10px 30px 14px rgba(143, 38, 217, 0.3)',
        },
        textShadow: {
            black: '0 1px 5px #121212',
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
