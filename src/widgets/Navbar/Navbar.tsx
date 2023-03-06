import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Portal } from 'shared/ui/Portal'
import { Button, ButtonVariants } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { userActions, userSelector } from 'entities/User'
import { useAppDispatch } from 'shared/hooks'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useSelector(userSelector)
    const dispath = useAppDispatch()
    const { logout } = userActions

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const signOutHandler = useCallback(() => {
        dispath(logout())
    }, [dispath, logout])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                {user ? (
                    <Button
                        variant={ButtonVariants.CLEAR_INVERTED}
                        square={false}
                        onClick={signOutHandler}
                    >
                        {t('buttons.signOut')}
                    </Button>
                ) : (
                    <Button
                        variant={ButtonVariants.CLEAR_INVERTED}
                        square={false}
                        onClick={openModal}
                    >
                        {t('buttons.signIn')}
                    </Button>
                )}
            </div>
            <Portal containerId="login-modal">
                <LoginModal isOpen={isOpen} closeModal={closeModal} />
            </Portal>
        </div>
    )
}
