import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks'
import { classNames } from 'shared/lib/classNames'
import { Input } from 'shared/ui/Input'
import { Loader } from 'shared/ui/Loader'
import { fetchProfileThunk } from '../../model/services/fetchProfileThunk'
import { profileSelectors } from '../../model/selectors/index'
import cls from './ProfileForm.module.scss'

interface ProfileFormProps {
    className?: string
    readonly: boolean
}

export function ProfileForm({ className, readonly = true }: ProfileFormProps) {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const { profile, isLoading, error } = useSelector(
        profileSelectors.profileState
    )

    const [first, setFirst] = useState(profile.firstname)
    const [last, setLast] = useState(profile.lastname)

    useEffect(() => {
        setFirst(profile.firstname)
        setLast(profile.lastname)
    }, [profile.firstname, profile.lastname])

    const firstOnChange = (value: string) => {
        setFirst(value)
    }

    const lastOnChange = (value: string) => {
        setLast(value)
    }

    useEffect(() => {
        dispatch(fetchProfileThunk())
    }, [dispatch])

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className={classNames(cls.form, {}, [className])}>
            <Input
                onChange={firstOnChange}
                readOnly={readonly}
                value={first}
                label={t('form.firstname', { ns: 'profile' })}
            />
            <Input
                onChange={lastOnChange}
                readOnly={readonly}
                value={last}
                label={t('form.lastname', { ns: 'profile' })}
            />
        </div>
    )
}
