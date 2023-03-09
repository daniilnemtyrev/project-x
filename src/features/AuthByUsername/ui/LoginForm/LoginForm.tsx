import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonSizes, ButtonVariants } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Text, TextVariants } from 'shared/ui/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useReducerManager } from 'shared/hooks'
import { ReducersList } from 'app/providers/StoreProvider/config/StateSchema'
import { login } from '../../model/services/login/login'
import { loginSelector } from '../../model/selectors/loginSelector'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

const asyncReducers: ReducersList = {
    login: loginReducer,
}

const LoginForm = memo(() => {
    useReducerManager(asyncReducers)

    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const { username, password, isLoading, error } = useSelector(loginSelector)
    const { setUsername, setPassword } = loginActions

    const usernameChangeHandler = useCallback(
        (value: string) => {
            dispatch(setUsername(value))
        },
        [dispatch, setUsername]
    )

    const passwordChangeHandler = useCallback(
        (value: string) => {
            dispatch(setPassword(value))
        },
        [dispatch, setPassword]
    )

    const onLoginHandler = useCallback(() => {
        dispatch(login({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cls.loginForm}>
            <Text title={t('auth.title')} />

            <Input
                value={username}
                autofocus
                onChange={usernameChangeHandler}
                label={t('auth.enterUsername')}
            />
            <Input
                value={password}
                onChange={passwordChangeHandler}
                label={t('auth.enterPassword')}
            />
            {error && (
                <Text text={t('auth.error')} variant={TextVariants.ERROR} />
            )}

            <Button
                onClick={onLoginHandler}
                variant={ButtonVariants.FUTURE}
                size={ButtonSizes.S}
                disabled={isLoading}
            >
                {t('buttons.signIn')}
            </Button>
        </div>
    )
})

export default LoginForm
