module.exports = {
    siteMetadata: {
        title: 'Bad Fox',
        description: 'The official Bad Fox website.',
        author: 'Bad Fox <wearebadfox@gmail.com>',
        copyright: `&copy;${new Date().getFullYear()} Bad Fox vzw`,
        development: `Design and development by <a href="https://twitter.com/RemiPelhate" target="_blank">Rémi Pelhate</a>`,
        credits: [
            `All pictures by <a href="https://www.thomasgeuens.be/" target="_blank" rel="external">Thomas Geuens</a>`,
            `and <a href="https://www.photograus.be/" target="_blank" rel="external">Ben Graus</a>`,
        ].join(' '),
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-root-import',
        'gatsby-transformer-json',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: './src/data/',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
        },
    ],
}
