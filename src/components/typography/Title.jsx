import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = 'font-title font-black text-4xl md:text-5xl uppercase mb-10';

export default function Title({ children }) {
    const { text } = useContext(ThemeContext);

    return (
        <h1 className={classNames(DEFAULT, text)}>
            {children}
        </h1>
    )
}
