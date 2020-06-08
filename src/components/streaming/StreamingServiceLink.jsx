import React from 'react'
import classNames from 'classnames'
import * as Logos from 'src/components/logos'

const DEFAULT = classNames(
    'inline-block flex-1 h-12 py-4 px-6 rounded',
    'hover:bg-cerise-500 hover:text-white focus:outline-none focus:shadow-outline focus:text-white',
    'transition-all duration-75',
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
