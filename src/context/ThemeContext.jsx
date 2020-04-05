import React, { createContext } from 'react'

const LIGHT = {
    isDark: false,
    theme: 'light',
    text: 'text-black',
    bg: 'bg-white',
};

const DARK = {
    isDark: true,
    theme: 'dark',
    text: 'text-white',
    bg: 'bg-black',
};

const ThemeContext = createContext(LIGHT);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export function LightThemeProvider({ children }) {
    return (
        <ThemeProvider value={LIGHT}>
            {children}
        </ThemeProvider>
    )
}

export function DarkThemeProvider({ children }) {
    return (
        <ThemeProvider value={DARK}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeContext;
