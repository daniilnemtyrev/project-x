import { classNames } from 'shared/lib/classNames'
import {
    ChangeEvent,
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react'
import cls from './Input.module.scss'

type CustomHtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

interface InputProps extends CustomHtmlInputProps {
    value: string
    onChange: (value: string) => void
    label: string
    autofocus?: boolean
}

const charWidth = 9

export function Input(props: InputProps) {
    const {
        value,
        onChange,
        id,
        label,
        type = 'text',
        autofocus,
        ...rest
    } = props

    const [isFocused, setIsFocus] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.selectionStart)
    }

    const onFocusHandler = () => {
        setIsFocus(true)
    }

    const onBlurHandler = () => {
        setIsFocus(false)
    }

    useEffect(() => {
        if (autofocus) {
            setIsFocus(true)
            inputRef.current?.focus()
        }
    }, [autofocus])

    return (
        <div className={classNames(cls.wrapper)}>
            <label htmlFor={id}>{`${label}>`}</label>
            <div className={classNames(cls.caretWrapper)}>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChangeHandler}
                    className={classNames(cls.input)}
                    type={type}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    onBlur={onBlurHandler}
                    {...rest}
                />
                {isFocused && (
                    <span
                        className={classNames(cls.caret)}
                        style={{ left: caretPosition * charWidth }}
                    />
                )}
            </div>
        </div>
    )
}
