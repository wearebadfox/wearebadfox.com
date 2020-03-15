import React, { createContext } from 'react'

const ThemeContext = createContext({
    isDark: false,
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export function DarkThemeProvider({ children }) {
    return (
        <ThemeProvider value={{ isDark: true }}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContext;
