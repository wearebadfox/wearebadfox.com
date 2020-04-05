import React from 'react'
import classNames from 'classnames'

const DEFAULT = classNames(
    'w-full appearance-none rounded px-5 pt-3 pb-2 capitalize',
    'bg-gray-200 hover:bg-gray-100 focus:bg-white',
    'border-2 border-gray-200 focus:border-cherry focus:outline-none',
    'transition-all duration-200',
);

export default function TextArea({
    name,
    placeholder,
    isRequired,
    rows,
}) {
    return (
        <textarea
            name={name}
            placeholder={placeholder || name}
            required={isRequired}
            rows={rows}
            className={DEFAULT}
        />
    )
}

TextArea.defaultProps = {
    isRequired: false,
    rows: 5,
}
