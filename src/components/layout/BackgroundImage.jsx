import React from 'react'
import classNames from 'classnames'

const DEFAULT = 'bg-no-repeat';

export default function BackgroundImage({ children, className, src }) {
    return (
        <div
            style={{ backgroundImage: `url(${src})` }}
            className={classNames(DEFAULT, className)}
        >
            {children}
        </div>
    )
}
