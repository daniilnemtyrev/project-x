import { classNames } from 'shared/lib'

import { PropsWithChildren, useState } from 'react'
import { AppLink, AppLinkVarinats } from 'shared/ui'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const [test, setT] = useState(false)

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink variant={AppLinkVarinats.INVERTED} to="/">
                    MAIN
                </AppLink>
                <AppLink variant={AppLinkVarinats.INVERTED} to="/about">
                    ABOUT
                </AppLink>
                <button type="button" onClick={() => setT(true)}>
                    click
                </button>
                {test && <p>lol</p>}
            </div>
        </div>
    )
}
