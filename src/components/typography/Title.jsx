import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

export default function Title({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <h1 className={classNames(
            'font-title',
            'font-black',
            'uppercase',
            'mb-6',
            'text-6xl', {
            'text-white': isDark,
            'text-black': !isDark,
        })}>
            {children}
        </h1>
    )
}
