import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Paragraph({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <p className={`text-lg font-normal leading-relaxed mb-10 ${isDark ? 'text-white text-shadow-black' : 'text-black'}`}>
            {children}
        </p>
    )
}
