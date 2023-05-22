import { useContext } from 'react'
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const tooglesThemes: Record<Theme, Theme> = {
            [Theme.DARK]: Theme.LIGHT,
            [Theme.LIGHT]: Theme.PINK,
            [Theme.PINK]: Theme.DARK,
        }

        const newTheme = tooglesThemes[theme || Theme.DARK]

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        document.body.className = newTheme
    }

    return { theme: theme || Theme.LIGHT, toggleTheme }
}
