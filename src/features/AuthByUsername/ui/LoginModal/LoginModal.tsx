import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
    isOpen: boolean
    closeModal: () => void
}

export function LoginModal({ isOpen, closeModal }: LoginModalProps) {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <Suspense fallback={<Loader />}>
                <LoginForm closeHandler={closeModal} />
            </Suspense>
        </Modal>
    )
}
