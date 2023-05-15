import { InputHTMLAttributes } from 'react'
import { Input } from 'shared/ui/Input'
import { useField } from 'formik'
import { classNames } from 'shared/lib/classNames'
import cls from './FormikInput.module.scss'

type Value = InputHTMLAttributes<HTMLInputElement>['value']

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    readonly?: boolean
    autofocus?: boolean
}

export function FormikInput({
    name,
    label,
    readonly,
    autofocus,
    ...rest
}: FormInputProps) {
    const [{ value, onChange, onBlur }, { error, touched }] =
        useField<Value>(name)

    return (
        <div className={classNames(cls.formik_input)}>
            <Input
                name={name}
                readonly={readonly}
                value={value}
                onChange={onChange}
                label={label}
                onBlur={onBlur}
                autofocus={autofocus}
                {...rest}
            />
            {error && touched && (
                <span className={classNames(cls.error)}>{error}</span>
            )}
        </div>
    )
}
