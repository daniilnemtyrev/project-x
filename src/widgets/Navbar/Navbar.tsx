import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren } from 'react'
import { AppLink, AppLinkVariants } from 'shared/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const { t } = useTranslation()

    return <div className={classNames(cls.navbar, {}, [className])} />
}
