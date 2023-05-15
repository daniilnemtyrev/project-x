import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Profile } from 'features/EditableProfileCard/model/types/profile'
import { Avatar } from 'shared/ui/Avatar'
import { CurrencySelect } from 'entities/CurrencySelect'
import { CountrySelect } from 'entities/CountrySelect'
import { FormikProps, useFormikContext } from 'formik'
import { FormikInput } from 'shared/ui/Formik/FomrikInput/FormikInput'
import { getProfileReadonly } from 'features/EditableProfileCard'
import { useSelector } from 'react-redux'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps extends Partial<FormikProps<Profile>> {
    className?: string
}

export function ProfileCard({ values, className }: ProfileCardProps) {
    const readonly = useSelector(getProfileReadonly) ?? true

    const { t } = useTranslation('profile')

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <Avatar url={values?.avatar} />
            <FormikInput
                name="firstname"
                readonly={readonly}
                label={t('form.firstname', { ns: 'profile' })}
                autofocus
            />
            <FormikInput
                name="lastname"
                readonly={readonly}
                label={t('form.lastname', { ns: 'profile' })}
            />
            <FormikInput
                name="age"
                readonly={readonly}
                label={t('form.age', { ns: 'profile' })}
                type="number"
            />
            <FormikInput
                name="city"
                readonly={readonly}
                label={t('form.city', { ns: 'profile' })}
            />
            <FormikInput
                name="avatar"
                readonly={readonly}
                label={t('form.avatar', { ns: 'profile' })}
            />
            <CurrencySelect name="currency" readonly={readonly} />
            <CountrySelect name="country" readonly={readonly} />
        </div>
    )
}
