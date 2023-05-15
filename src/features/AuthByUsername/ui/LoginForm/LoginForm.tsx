import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text, TextVariants } from 'shared/ui/Text'
import { useAppDispatch, useReducerManager } from 'shared/hooks'
import { ReducersList } from 'app/providers/StoreProvider/config/StateSchema'
import { Formik } from 'formik'
import { Loader } from 'shared/ui/Loader'
import { FormikInput } from 'shared/ui/Formik/FomrikInput/FormikInput'
import { login } from '../../model/services/login/login'
import {
    getLoginError,
    getLoginIsLoading,
} from '../../model/selectors/loginSelector'
import { loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'
import { loginValidation } from '../../utils/schemas'

const asyncReducers: ReducersList = {
    login: loginReducer,
}

interface LoginFormValues {
    username: string
    password: string
}

const initialValues: LoginFormValues = {
    username: '',
    password: '',
}

interface Props {
    closeHandler?(): void
}

const LoginForm = memo(({ closeHandler }: Props) => {
    useReducerManager(asyncReducers)

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const onSubmitHandler = async (values: LoginFormValues) => {
        const res = await dispatch(login(values))

        if (closeHandler && res.type !== 'login/rejected') {
            closeHandler()
        }
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <Formik
            validationSchema={loginValidation}
            initialValues={initialValues}
            validateOnMount
            onSubmit={onSubmitHandler}
        >
            {({ values, handleSubmit, isValid }) => (
                <form className={cls.loginForm} onSubmit={handleSubmit}>
                    <Text title={t('auth.title')} />

                    <FormikInput
                        name="username"
                        value={values.username}
                        autofocus
                        label={t('auth.enterUsername')}
                    />
                    <FormikInput
                        name="password"
                        value={values.password}
                        label={t('auth.enterPassword')}
                    />
                    {error && (
                        <Text
                            text={t('auth.error')}
                            variant={TextVariants.ERROR}
                        />
                    )}

                    <Button
                        type="submit"
                        variant={ButtonVariants.FUTURE}
                        size={ButtonSizes.S}
                        disabled={!isValid}
                    >
                        {t('buttons.signIn')}
                    </Button>
                </form>
            )}
        </Formik>
    )
})

export default LoginForm
