import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'shared/contexts/theme-context'
import { DarkIcon, LightIcon } from 'shared/assets/icons'
import { Button } from 'shared/ui/Button'
import { memo } from 'react'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            square={false}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
})
