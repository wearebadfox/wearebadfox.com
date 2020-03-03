import React from 'react'

export default function Svg({
    viewBox,
    color,
    width,
    height,
    className,
    children,
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={width}
            height={height}
            fill={color}
            className={`transition-all duration-150 ${className}`}
        >
            {children}
        </svg>
    )
}

Svg.defaultProps = {
    color: 'currentColor',
    width: undefined,
    height: undefined,
};
