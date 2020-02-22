const isProduction = process.env.NODE_ENV === 'production';

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.jsx',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = () => ({
    plugins: [
        require('tailwindcss'),
        ...isProduction ? [purgecss] : [],
    ],
});
