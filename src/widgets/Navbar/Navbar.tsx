import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren } from 'react'
import { AppLink, AppLinkVarinats } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink variant={AppLinkVarinats.INVERTED} to="/">
                    {t('navbar.main')}
                </AppLink>
                <AppLink variant={AppLinkVarinats.INVERTED} to="/about">
                    {t('navbar.about')}
                </AppLink>
            </div>
        </div>
    )
}
