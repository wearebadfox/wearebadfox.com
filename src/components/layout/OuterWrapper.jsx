import React from 'react'

export default function OuterWrapper({ className, children }) {
    return (
        <div className={`px-8 md:px-16 lg:px-24 ${className}`}>
            {children}
        </div>
    )
}
