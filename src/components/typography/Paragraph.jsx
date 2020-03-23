import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Paragraph({ children, noSpace }) {
    const { isDark } = useContext(ThemeContext);
    const autoSpace = !noSpace;

    return (
        <p className={`font-normal text-base leading-loose ${isDark ? 'text-white text-shadow-black' : 'text-black'}
            ${autoSpace && 'pb-10'}`}
        >
            {children}
        </p>
    )
}

Paragraph.defaultProps = {
    noSpace: false,
}
