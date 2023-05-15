import { classNames } from 'shared/lib/classNames'
import { InputHTMLAttributes, memo, useEffect, useRef } from 'react'
import cls from './Input.module.scss'

type CustomHtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>

interface InputProps extends CustomHtmlInputProps {
    value?: string | number | readonly string[]
    label?: string
    autofocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        id,
        label,
        type = 'text',
        autofocus,
        readonly,
        ...rest
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autofocus && !readonly) {
            inputRef.current?.focus()
        }
    }, [autofocus, readonly])

    return (
        <div className={classNames(cls.wrapper)}>
            <label htmlFor={id}>{`${label}>`}</label>
            <input
                ref={inputRef}
                value={value}
                onChange={onChange}
                className={classNames(cls.input)}
                type={type}
                readOnly={readonly}
                {...rest}
            />
        </div>
    )
})
