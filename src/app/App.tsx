import { classNames } from 'shared/lib/classNames'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { useAppDispatch } from 'shared/lib/hooks'
import { userActions } from 'entities/User'
import { AppRouter } from './providers/router'

export function App() {
    const dispatch = useAppDispatch()
    const { initUser } = userActions

    useEffect(() => {
        dispatch(initUser())
    }, [dispatch, initUser])

    return (
        <Suspense fallback={<PageLoader />}>
            <div className={classNames('app')}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}
