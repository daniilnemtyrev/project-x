import { classNames } from 'shared/lib'

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

    const onToogle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button className={cls.toggle} type="button" onClick={onToogle}>
                {!collapsed && t('sidebar.collapse')}
            </button>

            <div className={cls.swicthers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
