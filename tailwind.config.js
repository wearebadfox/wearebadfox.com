/**
 * @see https://tailwindcss.com/docs/theme/#app
 */
module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
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
            '150%': '150%',
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
            'white-100': '#fafafa',
            'white-200': '#f0f2f5',
            'grey-100': '#d7dde5',
            cherry: '#eb3349',
            orange: '#f25f44',
        },
        linearGradientDirections: {
            b: 'to bottom',
            r: 'to right',
            l: 'to left',
        },
        linearGradientColors: {
            cherry: ['#f25f44', '#eb3349', '#f25f44'],
            'transparent-white': ['#fff 50%', 'rgba(255, 255, 255, 0.8)'],
        },
        boxShadow: {
            backdrop: '0 10px 30px 7px rgba(244, 47, 74, 0.25)',
            'backdrop-lg': '0 10px 30px 14px rgba(244, 47, 74, 0.3)',
        },
        textShadow: {
            black: '0 1px 5px #121212',
        }
    },
    variants: {
        colors: ['hover', 'focus'],
        backgroundPosition: ['responsive', 'hover', 'focus'],
        linearGradients: ['hover', 'focus'],
        boxShadow: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'first', 'last'],
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-typography'),
    ],
};
