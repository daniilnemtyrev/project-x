import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink'
import { AboutIcon, MainIcon } from 'shared/assets/icons'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: PropsWithChildren<SidebarProps>) {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                variant={ButtonVariants.FUTURE}
                onClick={onToggle}
                size={ButtonSizes.FULL}
            >
                {!collapsed ? '<<<<<<' : '>>>'}
            </Button>

            <div className={cls.links}>
                <AppLink
                    className={cls.link}
                    variant={AppLinkVariants.INVERTED}
                    to="/"
                >
                    <MainIcon className={cls.icon} />
                    <span>{t('navbar.main')}</span>
                </AppLink>

                <AppLink
                    className={cls.link}
                    variant={AppLinkVariants.INVERTED}
                    to="/about"
                >
                    <AboutIcon className={cls.icon} />
                    <span>{t('navbar.about')}</span>
                </AppLink>
            </div>

            <div className={classNames(cls.swicthers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
