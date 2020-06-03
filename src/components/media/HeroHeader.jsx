import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HeroHeader({ children }) {
    const { file } = useStaticQuery(graphql`
        query HeroHeaderQuery {
            file(relativePath: { eq: "red-alley-long-shot.jpg" }) {
                childImageSharp {
                    fluid {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                    }
                }
            }
        }
    `);

    return (
        <header className="relative min-h-2xl sm:min-h-md sm:max-h-lg">
            <Img fluid={file.childImageSharp.fluid} className="max-w-6xl mx-auto min-h-md" />
            <div className="w-full h-full absolute top-0 bg-gradient-b-transparent-black flex items-end">
                {children}
            </div>
        </header>
    );
}
