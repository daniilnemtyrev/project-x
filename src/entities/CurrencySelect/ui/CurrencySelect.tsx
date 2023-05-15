import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { FormikSelect } from 'shared/ui/Formik/FormikSelect/FormikSelect'
import { CurrencyEnum } from '../model/types/currency'

interface CurrencySelectProps {
    name: string
    readonly?: boolean
}

const options = Object.entries(CurrencyEnum).map((currency) => ({
    value: currency[0],
    label: currency[1],
}))

export const CurrencySelect = memo(
    ({ readonly, name }: CurrencySelectProps) => {
        const { t } = useTranslation()

        return (
            <FormikSelect
                label={t('form.currency', { ns: 'profile' })}
                options={options}
                readonly={readonly}
                name={name}
            />
        )
    }
)
