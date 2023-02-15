import { classNames } from 'shared/lib/classNames'

import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export function NotFoundPage({
    className,
}: PropsWithChildren<NotFoundPageProps>) {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('notFoundPage')}
        </div>
    )
}
