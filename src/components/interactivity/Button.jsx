import React from 'react'

export default function Button({
    children,
    onClick,
}) {
    return (
        <button
            className="appearance-none text-2xl font-extrabold rounded-full px-6 pt-2 pb-1 bg-150% bg-gradient-r-cherry
                hover:bg-right focus:bg-right transition-all duration-200 shadow-backdrop hover:shadow-backdrop-lg
                focus:shadow-backdrop-lg"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
