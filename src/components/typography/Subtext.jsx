import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function Subtext({ children }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <span className={`text-xs leading-normal ${isDark ? 'text-white' : 'text-black'}`}>
            {children}
        </span>
    )
}
