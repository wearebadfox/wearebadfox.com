import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Heading({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <h1
            className={`font-sans font-black lowercase mb-2 text-2xl md:text-3xl 
                ${isDark ? 'text-white' : 'text-black'}`}
        >
            {children}
        </h1>
    )
}
