import React from 'react'

export default function InputRow({ children, isAutoSized }) {
    const inputs = Array.isArray(children) ? children : [children];

    return (
        <div className="flex py-3 first:pt-0 last:pb-0">
            {inputs.map((input) => (
                <div className={`${isAutoSized && 'flex-1'} px-3 first:pl-0 last:pr-0`}>
                    {input}
                </div>
            ))}
        </div>
    )
}

InputRow.defaultProps = {
    isAutoSized: true,
}
