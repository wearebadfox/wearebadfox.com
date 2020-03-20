import React from 'react'

export default function TextInput({
    name,
    placeholder,
    isRequired,
}) {
    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder || name}
            required={isRequired}
            className="appearance-none capitalize w-full bg-gray-200 hover:bg-gray-100 focus:bg-white
                border-2 border-gray-200 focus:border-cherry focus:outline-none rounded px-5 pt-3 pb-2
                transition-all duration-200"
        />
    )
}

TextInput.defaultProps = {
    isRequired: false,
}
