import React from 'react'
import classNames from 'classnames'
import { ThemeProvider } from 'src/context/ThemeContext'

export default function Section({
    id,
    isDark,
    children,
}) {
    return (
        <ThemeProvider value={{ isDark }}>
            <section
                id={id}
                className={classNames({
                    'bg-black': isDark,
                    'text-white': isDark,
                    'h-screen': true,
                })}
            >
                {children}
            </section>
        </ThemeProvider>
    )
}

Section.defaultProps = {
    isDark: false,
};
