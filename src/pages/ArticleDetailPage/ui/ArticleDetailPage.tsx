import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import cls from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    const { id } = useParams()

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailPage, {}, [className])}>
                {t('error', { ns: 'article' })}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articleDetailPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    )
}

export default ArticleDetailPage
