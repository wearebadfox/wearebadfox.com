import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = 'font-normal text-base leading-loose';

const THEME = {
    light: 'text-black',
    dark: 'text-white text-shadow-black',
};

export default function Paragraph({ children, className }) {
    const { theme } = useContext(ThemeContext);

    return (
        <p className={classNames(className, DEFAULT, THEME[theme])}>
            {children}
        </p>
    )
}

Paragraph.defaultProps = {
    className: undefined,
}
