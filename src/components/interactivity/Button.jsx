import React from 'react'

export default function Button({
    children,
    type,
    onClick,
}) {
    return (
        <button
            className="appearance-none text-xl font-extrabold text-white rounded-full px-6 pt-2 pb-1
                bg-150% bg-gradient-r-cherry hover:bg-right focus:bg-right
                shadow-backdrop hover:shadow-backdrop-lg focus:shadow-backdrop-lg
                transition-all duration-200"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: undefined,
};
