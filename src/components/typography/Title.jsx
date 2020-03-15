import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Title({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <h1
            className={`font-title font-black uppercase mb-8 text-5xl md:text-6xl 
                ${isDark ? 'text-white' : 'text-black'}`}
        >
            {children}
        </h1>
    )
}
