import React, { useContext } from 'react'
import ThemeContext from 'src/context/ThemeContext'

export default function IconLink({
    url,
    children,
    renderIcon,
}) {
    const { isDark } = useContext(ThemeContext);

    return (
        <a
            href={url}
            className={`flex justify-center mx-3 first:ml-0 last:mr-0 py-3 px-4 cursor-pointer 
                font-sans font-bold text-xl ${isDark ? 'bg-white text-black' : 'bg-black text-white'} text-left
                whitespace-pre-wrap leading-tight transition-all duration-200
                hover:bg-gradient-r-cherry-purple underline-thick-gray-400 hover:underline-thick-white`}
        >
                {renderIcon({ className: 'mr-3' })}
                {children}
        </a>
    )
}
