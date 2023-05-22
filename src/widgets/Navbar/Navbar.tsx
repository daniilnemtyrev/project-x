import { classNames } from 'shared/lib/classNames'

import { memo, PropsWithChildren, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Portal } from 'shared/ui/Portal'
import { Button, ButtonVariants } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { userActions, getUserData } from 'entities/User'
import { useAppDispatch } from 'shared/hooks'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: PropsWithChildren<NavbarProps>) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const user = useSelector(getUserData)
    const dispath = useAppDispatch()
    const { logout } = userActions

    const openModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [])

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
            {isOpen && (
                <Portal containerId="login-modal">
                    <LoginModal isOpen={isOpen} closeModal={closeModal} />
                </Portal>
            )}
        </div>
    )
})
