import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = 'text-xs leading-normal';

export default function Subtext({ children }) {
    const { text } = useContext(ThemeContext);

    return (
        <span className={classNames(DEFAULT, text)}>
            {children}
        </span>
    )
}
