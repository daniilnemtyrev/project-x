import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'

import { ReducersList } from 'app/providers/StoreProvider'
import { useAppDispatch, useReducerManager } from 'shared/hooks'
import { Icon } from 'shared/ui/Icon/Icon'
import { EyeIcon, CalendarIcon } from 'shared/assets/icons'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    useReducerManager(reducers)
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                )
            default:
                return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    if (isLoading) {
        return (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        )
    }
    if (error) {
        return (
            <Text
                align={TextAlign.CENTER}
                title={t('error', { ns: 'article' })}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <Avatar size="L" url={article?.img} className={cls.avatar} />

            <Text
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />

            <div className={cls.info}>
                <Icon Svg={EyeIcon} />
                <Text text={String(article?.views)} />
            </div>

            <div className={cls.info}>
                <Icon Svg={CalendarIcon} />
                <Text text={article?.createdAt} />
            </div>

            {article?.blocks.map(renderBlock)}
        </div>
    )
})
