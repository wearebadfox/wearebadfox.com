import React from 'react'

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
            className="w-full appearance-none capitalize bg-white-200 hover:bg-white-100 focus:bg-white
                border-2 border-white-200 focus:border-cherry focus:outline-none rounded px-5 pt-3 pb-2
                transition-all duration-200"
        />
    )
}

TextArea.defaultProps = {
    isRequired: false,
    rows: 5,
}
