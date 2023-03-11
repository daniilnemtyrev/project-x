import { classNames } from 'shared/lib/classNames'

import { memo, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSizes } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = memo(
    ({ className }: PropsWithChildren<LangSwitcherProps>) => {
        const { t, i18n } = useTranslation()

        const changeLang = async () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }

        return (
            <Button
                onClick={changeLang}
                className={classNames('', {}, [className])}
                square={false}
                size={ButtonSizes.L}
            >
                {t('language')}
            </Button>
        )
    }
)
