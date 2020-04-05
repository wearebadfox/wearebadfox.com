import React from 'react'
import classNames from 'classnames'

const DEFAULT = classNames(
    'appearance-none capitalize w-full rounded px-5 pt-3 pb-2',
    'bg-gray-200 hover:bg-gray-100 focus:bg-white',
    'border-2 border-gray-200 focus:border-cherry focus:outline-none',
    'transition-all duration-200',
);

export default function TextInput({ name, placeholder, isRequired }) {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder || name}
            required={isRequired}
            className={DEFAULT}
        />
    )
}

TextInput.defaultProps = {
    isRequired: false,
}
