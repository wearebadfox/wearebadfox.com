import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Paragraph({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <p className={`text-lg text-shadow-black leading-relaxed mb-10 ${isDark ? 'text-white' : 'text-black'}`}>
            {children}
        </p>
    )
}
