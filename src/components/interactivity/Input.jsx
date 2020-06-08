import React from 'react'
import classNames from 'classnames'

export const DEFAULT = classNames(
    'no-appearance bg-neutral-700 placeholder-neutral-500',
    'rounded border-2 border-neutral-700 p-3 my-2',
    'focus:outline-none focus:shadow-outline',
);
export const FULL_WIDTH = 'w-full';

export default function Input({ isFullWidth, type, placeholder }) {
    const conditionalClasses = {
        [FULL_WIDTH]: isFullWidth,
    };

    return (
        <input
            className={classNames(DEFAULT, conditionalClasses)}
            type={type}
            placeholder={placeholder}
        />
    );
}

Input.defaultProps = {
    isFullWidth: false,
    type: 'text',
    placeholder: undefined,
};
