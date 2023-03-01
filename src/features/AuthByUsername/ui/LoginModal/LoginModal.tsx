import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    isOpen: boolean
    closeModal: () => void
}

export function LoginModal({ isOpen, closeModal }: LoginModalProps) {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <LoginForm />
        </Modal>
    )
}
