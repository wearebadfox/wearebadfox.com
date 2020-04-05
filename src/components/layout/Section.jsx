import React, { useContext } from 'react'
import classNames from 'classnames'
import ThemeContext from 'src/context/ThemeContext'

export default function Section({ id, className, children }) {
    const { text, bg } = useContext(ThemeContext);

    return (
        <section
            id={id}
            className={classNames(className, text, bg)}
        >
            {children}
        </section>
    )
}

Section.defaultProps = {
    className: undefined,
}
