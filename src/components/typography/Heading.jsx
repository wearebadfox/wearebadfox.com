import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

const DEFAULT = 'font-sans font-black lowercase mb-2 text-2xl md:text-3xl';

export default function Heading({ children }) {
    const { text } = useContext(ThemeContext);

    return (
        <h1 className={classNames(DEFAULT, text)}>
            {children}
        </h1>
    )
}
