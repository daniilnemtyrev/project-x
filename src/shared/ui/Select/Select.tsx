import { classNames } from 'shared/lib/classNames'
import { InputHTMLAttributes } from 'react'
import cls from './Select.module.scss'

export interface SelectOption<T> {
    value: T
    label: T
}

type CustomSelectInputProps = Omit<
    InputHTMLAttributes<HTMLSelectElement>,
    'value'
>

interface Props<T> extends CustomSelectInputProps {
    className?: string
    options?: SelectOption<T>[]
    label?: string
    readonly?: boolean
    name: string
    value?: string
}

export function Select<T extends string>({
    className,
    options,
    value,
    onChange,
    label,
    readonly,
    ...rest
}: Props<T>) {
    return (
        <div className={classNames(cls.wrapper)}>
            <label htmlFor={value}>{`${label}>`}</label>

            <select
                id={value}
                value={value}
                onChange={onChange}
                className={classNames(cls.select, {}, [className])}
                disabled={readonly}
                {...rest}
            >
                {options?.map((item) => (
                    <option
                        className={cls.option}
                        value={item.value}
                        key={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
