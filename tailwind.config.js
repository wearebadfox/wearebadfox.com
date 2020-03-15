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
                raw: '(orientation: portrait)'
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
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
            'left--14': '-14rem',
        },
        colors: {
            black: '#121212',
            white: '#fff',
            cherry: '#eb3349',
            orange: '#f25f44',
        },
        linearGradientDirections: {
            r: 'to right',
            l: 'to left',
        },
        linearGradientColors: {
            cherry: ['#f25f44', '#eb3349', '#f25f44'],
        },
        boxShadow: {
            backdrop: '0 0 47px 7px rgba(244, 47, 74, 0.23)',
            'backdrop-lg': '0 0 47px 15px rgba(244, 47, 74, 0.3)',
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
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-typography'),
    ],
};
