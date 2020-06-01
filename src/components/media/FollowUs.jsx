import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SocialLink from 'src/components/media/SocialLink'

const DEFAULT = 'text-white text-sm lowercase flex items-center';
const SEPARATOR = 'ml-3 mr-1';

function Separator() {
    return <span className={SEPARATOR}>/</span>;
}

export default function FollowUs() {
    const { data, social } = useStaticQuery(
        graphql`
            query FollowUsQuery {
                data: dataJson {
                    followUs
                }
                social: allSocialJson {
                    edges {
                        node {
                            name
                            url
                        }
                    }
                }
            }
        `
    );

    return (
        <div className={DEFAULT}>
            {data.followUs}
            <Separator />
            {social.edges.map(({ node }, key) => (
                <SocialLink key={key} {...node} />
            ))}
        </div>
    );
}
