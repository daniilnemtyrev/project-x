import { classNames } from 'shared/lib'

import { PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: PropsWithChildren<SidebarProps>) {
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
            <button type="button" onClick={onToogle}>
                TOOGLE
            </button>

            <div className={cls.swicthers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
