import { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { Select } from 'shared/ui/Select'
import { SelectOption } from 'shared/ui/Select/Select'

export interface FormInputProps<T>
    extends InputHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    readonly?: boolean
    autofocus?: boolean
    options?: SelectOption<T>[]
}

export function FormikSelect<T extends string>({
    name,
    label,
    readonly,
    ...rest
}: FormInputProps<T>) {
    const [{ value, onChange }, { error, touched }] = useField<string>(name)

    return (
        <Select
            {...rest}
            name={name}
            readonly={readonly || Boolean(error) || touched}
            value={value}
            onChange={onChange}
            label={label}
        />
    )
}
