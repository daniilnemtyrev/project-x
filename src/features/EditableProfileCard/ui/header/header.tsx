import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import { Text } from 'shared/ui/Text'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks'
import { useCallback } from 'react'
import { useFormikContext } from 'formik'
import cls from './header.module.scss'
import { getProfileReadonly } from '../../model/selectors/profileSelectors'
import { profileActions } from '../../model/slice/profileSlice'
import { Profile } from '../../model/types/profile'

interface Props {
    className?: string
}

export function Header({ className }: Props) {
    const { t } = useTranslation()

    const { resetForm, isValid } = useFormikContext<Profile>()

    const readonly = useSelector(getProfileReadonly)

    const dispatch = useAppDispatch()

    const { setReadonly } = profileActions

    const accessEdit = useCallback(() => {
        dispatch(setReadonly(false))
    }, [dispatch, setReadonly])

    const cancel = useCallback(() => {
        resetForm()
    }, [resetForm])

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('title', { ns: 'profile' })} />
            {readonly ? (
                <Button
                    onClick={accessEdit}
                    size={ButtonSizes.S}
                    variant={ButtonVariants.OUTLINE}
                >
                    {t('edit', { ns: 'profile' })}
                </Button>
            ) : (
                <div className={cls.editButtons}>
                    <Button
                        type="reset"
                        onClick={cancel}
                        size={ButtonSizes.S}
                        variant={ButtonVariants.OUTLINE_RED}
                    >
                        {t('cancel', { ns: 'profile' })}
                    </Button>
                    <Button
                        type="submit"
                        size={ButtonSizes.S}
                        variant={ButtonVariants.OUTLINE}
                        disabled={!isValid}
                    >
                        {t('save', { ns: 'profile' })}
                    </Button>
                </div>
            )}
        </div>
    )
}
