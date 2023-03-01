/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { classNames } from 'shared/lib/classNames'
import {
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import cls from './Modal.module.scss'

interface ModalProps {
    isOpen: boolean
    closeModal: () => void
}

const ANIMATION_DELAY = 200

export function Modal({
    children,
    isOpen,
    closeModal,
}: PropsWithChildren<ModalProps>) {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        setIsClosing(true)
        timerRef.current = setTimeout(() => {
            closeModal()
            setIsClosing(false)
            setIsMounted(false)
        }, ANIMATION_DELAY)
    }, [closeModal])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler()
            }
        }

        window.addEventListener('keydown', onKeyDown)

        if (!isOpen) {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(timerRef.current)
        }
    }, [closeHandler, isOpen])

    if (!isOpen) {
        return null
    }

    return (
        <div
            className={classNames(
                cls.modal,
                { [cls.open]: isMounted, [cls.closing]: isClosing },
                []
            )}
        >
            <div onClick={closeHandler} className={classNames(cls.outline)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
