import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Text } from 'shared/ui/Text'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import cls from './ProfileCard.module.scss'
import { ProfileForm } from '../ProfileForm/ProfileForm'

interface ProfileCardProps {
    className?: string
}

export function ProfileCard({ className }: ProfileCardProps) {
    const { t } = useTranslation('profile')

    const [readonly, setReadOnly] = useState(true)

    const changeReadOnly = () => {
        setReadOnly((prev) => !prev)
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('title')} />
                <Button
                    onClick={changeReadOnly}
                    size={ButtonSizes.S}
                    variant={ButtonVariants.OUTLINE}
                >
                    {t('edit', { ns: 'profile' })}
                </Button>
            </div>

            <ProfileForm readonly={readonly} />
        </div>
    )
}
