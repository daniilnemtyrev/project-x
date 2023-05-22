import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'shared/contexts/theme-context'
import { ThemeIcon } from 'shared/assets/icons'
import { Button } from 'shared/ui/Button'
import { memo } from 'react'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    const themeIconColor: Record<Theme, string> = {
        [Theme.DARK]: '#0115C6',
        [Theme.LIGHT]: '#FFC700',
        [Theme.PINK]: '#c00097',
    }

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            square={false}
        >
            <ThemeIcon mainColor={themeIconColor[theme]} />
        </Button>
    )
})
