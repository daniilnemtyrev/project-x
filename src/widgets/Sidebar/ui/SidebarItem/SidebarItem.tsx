import { AppLink, AppLinkVariants } from 'shared/ui/AppLink'
import { classNames } from 'shared/lib/classNames'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation()
    const { item, collapsed } = props
    const { textKey, path, Icon } = item

    return (
        <AppLink
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            variant={AppLinkVariants.INVERTED}
            to={path}
        >
            <Icon className={cls.icon} />
            <span>{t(`${textKey}`)}</span>
        </AppLink>
    )
})
