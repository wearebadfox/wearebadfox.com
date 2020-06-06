import React from 'react'
import Img from 'gatsby-image'

export default function HeroHeader({ file, children }) {
    return (
        <header className="relative min-h-2xl sm:min-h-md sm:max-h-lg">
            <Img fluid={file.childImageSharp.fluid} className="max-w-6xl mx-auto min-h-md" />
            <div className="w-full h-full absolute top-0 bg-gradient-b-transparent-black flex items-end">
                {children}
            </div>
        </header>
    );
}
