import React, { useContext } from 'react'
import classNames from 'classnames'
import * as Icons from 'src/components/icons'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = classNames(
    'block rounded-full h-8 w-8 p-1 mx-1',
    'hover:text-white focus:text-white',
    'hover:bg-gradient-r-cherry-purple focus:bg-gradient-r-cherry-purple',
);

export default function SocialLink({ name, url, className }) {
    const { text } = useContext(ThemeContext);
    const Icon = Icons[name.replace(' ', '')];

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(className, DEFAULT, text)}
        >
            <Icon height="100%" />
        </a>
    )
}
