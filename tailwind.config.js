module.exports = {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            caps: ['Jost', 'sans-serif'],
            default: ['Titillium Web', 'sans-serif'],
        },
        colors: {
            black: 'rgb(0, 0, 0)',
            white: 'rgb(255, 255, 255)',
            neutral: {
                400: 'rgb(151, 151, 151)',
                600: 'rgb(69, 67, 78)',
            },
            cherry: {
                500: 'rgb(235, 51, 73)',
            },
            peach: {
                500: 'rgb(242, 95, 68)',
            },
            purple: {
                500: 'rgb(143, 38, 217)',
            },
            transparent: 'transparent',
        },
        linearGradientDirections: {
            b: 'to bottom',
            r: 'to right',
            l: 'to left',
        },
        linearGradientColors: theme => ({
            'wiretrap': [theme('colors.cherry.500'), theme('colors.purple.500')],
            'cherry-peach': [theme('colors.cherry.500'), theme('colors.peach.500')],
            'transparent-black': [`rgba(0, 0, 0, 0.5)`, `${theme('colors.black')} 90%`],
        }),
        extend: {
            borderWidth: {
               3: '3px',
            },
            spacing: {
                11: '2.25rem',
                13: '3.25rem',
                14: '3.5rem',
                17: '4.25rem',
            },
            minHeight: {
                'md': '28rem',
                'lg': '32rem',
                'xl': '36rem',
                '2xl': '42rem',
            },
            maxHeight: {
                'md': '28rem',
                'lg': '32rem',
                'xl': '36rem',
                '2xl': '42rem',
            },
        },
    },
    variants: {
        border: ['hover', 'focus', 'group-hover'],
        colors: ['hover', 'focus', 'group-hover'],
        textColor: ['hover', 'focus', 'group-hover'],
        backgroundPosition: ['responsive', 'hover', 'focus'],
        linearGradients: ['hover', 'focus'],
        boxShadow: ['responsive', 'hover', 'focus'],
        padding: ['responsive', 'first', 'last'],
        margin: ['responsive', 'first', 'last', 'group-hover'],
        opacity: ['hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('tailwindcss-gradients'),
        require('tailwindcss-typography'),
    ],
};
