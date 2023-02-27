import { FC, useEffect, useMemo, useState } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'shared/contexts/theme-context'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const value = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        document.body.className = defaultTheme
    }, [])

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
