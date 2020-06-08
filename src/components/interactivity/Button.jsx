import React from 'react'
import classNames from 'classnames'

export const DEFAULT = classNames(
    'no-appearance bg-cerise-500 font-white font-bold',
    'rounded px-4 py-2 my-2 w-full',
    'hover:bg-cerise-700 focus:outline-none focus:shadow-outline transition-all duration-75',
);

export default function Button({ type, children }) {
    return (
        <button className={DEFAULT} type={type}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
};
