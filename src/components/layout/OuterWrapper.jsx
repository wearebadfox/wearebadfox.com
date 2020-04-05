import React from 'react'
import classNames from 'classnames'

const DEFAULT = 'px-8 md:px-16 lg:px-24';

export default function OuterWrapper({ className, children }) {
    return (
        <div className={classNames(className, DEFAULT)}>
            {children}
        </div>
    )
}

OuterWrapper.defaultProps = {
    className: undefined,
}
