/* eslint-disable react/jsx-no-useless-fragment */
import { classNames } from 'shared/lib/classNames'
import { ProfileCard } from 'entities/ProfileCard'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks'
import { Formik } from 'formik'
import { Loader } from 'shared/ui/Loader'
import cls from './EditableProfileCard.module.scss'
import { Header } from './header/header'
import {
    getProfileForm,
    getProfileIsLoading,
} from '../model/selectors/profileSelectors'
import { Profile } from '../model/types/profile'
import { updateProfileThunk } from '../model/services/updateProfileThunk'
import { profileValidation } from '../utils/schemas'

interface Props {
    className?: string
}

export function EditableProfileCard({ className }: Props) {
    const initialValues = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const dispatch = useAppDispatch()

    const onSubmitHandler = (values: Profile) => {
        dispatch(updateProfileThunk({ values }))
    }

    if (isLoading || !initialValues) {
        return <Loader />
    }

    return (
        <Formik
            onSubmit={onSubmitHandler}
            initialValues={initialValues}
            validateOnMount
            validationSchema={profileValidation}
        >
            {({ values, handleSubmit }) => (
                <form
                    className={classNames(cls.editableProfileCard, {}, [
                        className,
                    ])}
                    onSubmit={handleSubmit}
                >
                    <Header />
                    <ProfileCard values={values} />
                </form>
            )}
        </Formik>
    )
}
