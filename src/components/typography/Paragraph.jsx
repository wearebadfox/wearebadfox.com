import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

export default function Paragraph({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <p className={classNames(
            'font-semibold',
            'text-lg',
            'leading-relaxed', {
            'text-white': isDark,
            'text-black': !isDark,
        })}>
            {children}
        </p>
    )
}
