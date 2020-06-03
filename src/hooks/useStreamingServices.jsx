import { useStaticQuery, graphql } from 'gatsby'

export default function useStreamingServices() {
    const { streamingServices } = useStaticQuery(
        graphql`
            query StreamingServices {
                streamingServices: allStreamingServicesJson {
                    edges {
                        node {
                            id
                            name
                            url
                        }
                    }
                }
            }
        `
    );

    return streamingServices;
}
