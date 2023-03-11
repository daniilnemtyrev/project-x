import { classNames } from 'shared/lib/classNames'

import { memo, PropsWithChildren, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import cls from './Sidebar.module.scss'
import { sidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(
    ({ className }: PropsWithChildren<SidebarProps>) => {
        const [collapsed, setCollapsed] = useState(false)

        const onToggle = () => {
            setCollapsed((prev) => !prev)
        }

        return (
            <div
                className={classNames(
                    cls.sidebar,
                    { [cls.collapsed]: collapsed },
                    [className]
                )}
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
                    {sidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}
                </div>

                <div className={classNames(cls.swicthers)}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        )
    }
)
