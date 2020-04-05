import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = classNames(
    'flex justify-center mx-3 first:ml-0 last:mr-0 py-3 px-4 cursor-pointer',
    'font-sans font-bold text-xl text-left whitespace-pre-wrap leading-tight',
    'hover:bg-gradient-r-cherry-purple underline-thick-gray-400 hover:underline-thick-white',
    'transition-all duration-200',
);

const THEME = {
    light: 'bg-black text-white',
    dark: 'bg-white text-black',
}

export default function IconLink({ url, children, renderIcon }) {
    const { theme } = useContext(ThemeContext);

    return (
        <a
            href={url}
            className={classNames(DEFAULT, THEME[theme])}
        >
            {renderIcon({ className: 'mr-3' })}
            {children}
        </a>
    )
}
