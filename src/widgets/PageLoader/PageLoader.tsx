import { PropsWithChildren } from 'react'
import { classNames } from 'shared/lib'
import { Loader } from 'shared/ui/Loader'
import cls from './PageLoader.module.scss'

interface LoaderProps {
    className?: string
}

export function PageLoader({ className }: PropsWithChildren<LoaderProps>) {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
