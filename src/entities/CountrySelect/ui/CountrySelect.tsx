import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { FormikSelect } from 'shared/ui/Formik/FormikSelect/FormikSelect'
import { CountryEnum } from '../model/types/country'

interface CountrySelectProps {
    name: string

    readonly?: boolean
}

const options = Object.entries(CountryEnum).map((currency) => ({
    value: currency[0],
    label: currency[1],
}))

export const CountrySelect = memo(({ readonly, name }: CountrySelectProps) => {
    const { t } = useTranslation()

    return (
        <FormikSelect
            label={t('form.country', { ns: 'profile' })}
            options={options}
            readonly={readonly}
            name={name}
        />
    )
})
