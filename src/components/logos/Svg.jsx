import React from 'react'
import classNames from 'classnames'

const DEFAULT = 'transition-all duration-150';

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
            className={classNames(className, DEFAULT)}
        >
            {children}
        </svg>
    )
}

Svg.defaultProps = {
    color: 'currentColor',
    width: undefined,
    height: undefined,
    className: undefined,
};
