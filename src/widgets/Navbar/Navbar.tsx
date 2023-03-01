import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Portal } from 'shared/ui/Portal'
import { Button, ButtonVariants } from 'shared/ui/Button'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button
                    variant={ButtonVariants.CLEAR_INVERTED}
                    square={false}
                    onClick={openModal}
                >
                    {t('buttons.signIn')}
                </Button>
            </div>
            <Portal>
                <LoginModal isOpen={isOpen} closeModal={closeModal} />
            </Portal>
        </div>
    )
}
