import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import cls from './LoginForm.module.scss'

export function LoginForm() {
    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={cls.loginForm}>
            <Input
                value={name}
                autofocus
                onChange={setName}
                label={t('auth.enterUsername')}
            />
            <Input
                value={password}
                onChange={setPassword}
                label={t('auth.enterPassword')}
            />
            <Button variant={ButtonVariants.FUTURE} size={ButtonSizes.S}>
                {t('buttons.signIn')}
            </Button>
        </div>
    )
}
