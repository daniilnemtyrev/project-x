/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { classNames } from 'shared/lib/classNames'
import { PropsWithChildren, useEffect } from 'react'
import { Portal } from 'shared/ui/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
    isOpen: boolean
    closeModal: () => void
}

export function Modal({
    children,
    isOpen,
    closeModal,
}: PropsWithChildren<ModalProps>) {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        window.addEventListener('keydown', onKeyDown)

        if (!isOpen) {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [closeModal, isOpen])

    return (
        <Portal>
            <div className={classNames(cls.modal, { [cls.open]: isOpen }, [])}>
                <div onClick={closeModal} className={classNames(cls.outline)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={cls.content}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
