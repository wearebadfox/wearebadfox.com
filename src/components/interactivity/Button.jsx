import React from 'react'
import classNames from 'classnames'

const DEFAULT = classNames(
    'appearance-none rounded-full px-6 pt-2 pb-1',
    'text-xl font-extrabold text-white',
    'bg-3/2 bg-gradient-r-wiretrap hover:bg-right focus:bg-right',
    'shadow-backdrop hover:shadow-backdrop-lg focus:shadow-backdrop-lg',
    'transition-all duration-200',
);

export default function Button({ children, type, onClick }) {
    return (
        <button
            className={DEFAULT}
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
