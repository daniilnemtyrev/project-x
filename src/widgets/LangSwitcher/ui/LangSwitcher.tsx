import { classNames } from 'shared/lib/classNames'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export function LangSwitcher({
    className,
}: PropsWithChildren<LangSwitcherProps>) {
    const { t, i18n } = useTranslation()

    const changeLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={changeLang}
            className={classNames(cls.langSwitcher, {}, [className])}
        >
            {t('language')}
        </Button>
    )
}
