import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Title({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <h1
            className={`font-title font-black uppercase mb-10 text-4xl md:text-5xl 
                ${isDark ? 'text-white' : 'text-black'}`}
        >
            {children}
        </h1>
    )
}
