import React from 'react'
import classNames from 'classnames'
import * as Icons from 'src/components/icons'

const DEFAULT = classNames(
    'block h-10 w-10 p-2',
    'hover:border-white transition-all duration-75',
);

export default function SocialLink({ name, url }) {
    const Icon = Icons[name];

    if (!Icon) {
        return null;
    }

    return (
        <a href={url} className={DEFAULT} target="_blank" rel="noopener noreferrer external">
            <Icon height="100%" className="block mx-auto"/>
        </a>
    );
}
