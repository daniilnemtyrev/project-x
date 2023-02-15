import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import cls from './PageError.module.scss'

export function PageError() {
    const { t } = useTranslation('translation')

    return (
        <div className={classNames(cls.pageError)}>
            <h1>{t('error')}</h1>
        </div>
    )
}
