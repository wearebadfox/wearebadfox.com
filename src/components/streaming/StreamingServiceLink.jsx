import React from 'react'
import classNames from 'classnames'
import * as Logos from 'src/components/logos'

const DEFAULT = classNames(
    'inline-block flex-1 h-13 py-4 px-6 border-3 border-black',
    'hover:border-white transition-all duration-75',
);

export default function StreamingServiceLink({ id, url }) {
    const Logo = Logos[id];

    if (! Logo) {
        return null;
    }

    return (
        <a href={url} className={DEFAULT} target="_blank" rel="noopener noreferrer external">
            <Logo height="1rem" className="block mx-auto" />
        </a>
    );
}
