import { createContext } from 'react'

const ThemeContext = createContext({
    isDark: false,
});

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
