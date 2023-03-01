import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
    const { t } = useTranslation('main')

    return <div>{t('title', { ns: 'main' })}</div>
}

export default MainPage
