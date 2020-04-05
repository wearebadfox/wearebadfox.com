import React from 'react'
import * as Logos from 'src/components/logos'
import content from 'src/content/global'

export function ListenLink({ name, url }) {
    const Logo = Logos[name.replace(' ', '')];

    if (! Logo) {
        return null;
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-10 px-4 py-3 text-white hover:text-cherry"
        >
            <Logo height="100%" />
        </a>
    )
}

export default function ListenLinks() {
    return (
        <ul className="list-none flex flex-wrap justify-center p-3">
            {Object.values(content.listen).map((media) => (
                <li key={media.name}>
                    <ListenLink {...media} />
                </li>
            ))}
        </ul>
    )
}
