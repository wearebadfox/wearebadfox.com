import React from 'react'

export default function BackgroundContainer({ src, children }) {
    return (
        <div
            style={{ backgroundImage: src ? `url(${src})` : undefined }}
            className="bg-cover lg:bg-contain bg-center bg-no-repeat w-full h-full"
        >
            {children}
        </div>
    )
}
