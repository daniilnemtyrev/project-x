import { classNames } from 'shared/lib/classNames'

import { PropsWithChildren, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { Portal } from 'shared/ui/Portal'
import { Button } from 'shared/ui/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: PropsWithChildren<NavbarProps>) {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onSignIn = () => {
        setIsOpen(true)
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <Button onClick={onSignIn}>{t('navbar.signIn')}</Button>
            </div>
            <Portal>
                <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi earum, fugiat dolore facilis sed pariatur eum quas
                    porro eaque aut magnam reprehenderit iure delectus error
                    praesentium hic asperiores eveniet consequatur?
                </Modal>
            </Portal>
        </div>
    )
}
