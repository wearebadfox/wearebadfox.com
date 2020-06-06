import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import useStreamingServices from 'src/hooks/useStreamingServices'
import StreamingServiceLink from 'src/components/streaming/StreamingServiceLink'
import BadFox from 'src/components/logos/BadFox'
import HeroLayout from 'src/components/layouts/HeroLayout'

export default function Home() {
    const streamingServices = useStreamingServices();
    const { file } = useStaticQuery(graphql`
        query HomePageQuery {
            file(relativePath: { eq: "red-alley-long-shot.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <HeroLayout
            file={file}
            renderHeroHeader={() => (
                <div className="flex-1 mx-6 my-6 sm:my-0">
                    <div className="mx-auto max-w-xs sm:max-w-sm">
                        <BadFox />
                    </div>
                    <ul className="list-none my-6 flex flex-row flex-wrap justify-center">
                        {streamingServices.edges.map(({ node }, key) => (
                            <li key={key} className="flex justify-center">
                                <StreamingServiceLink {...node} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        />
    );
}
