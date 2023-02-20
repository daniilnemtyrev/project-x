import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
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
            <button
                data-testid="sidebar-toggle"
                className={cls.toggle}
                type="button"
                onClick={onToggle}
            >
                {!collapsed && t('sidebar.collapse')}
            </button>

            <div
                className={classNames(cls.swicthers, {
                    [cls.swicthers_collapsed]: collapsed,
                })}
            >
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
