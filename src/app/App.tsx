import { classNames } from 'shared/lib/classNames'
import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { useAppDispatch } from 'shared/hooks'
import { getInited, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { AppRouter } from './providers/router'

export function App() {
    const dispatch = useAppDispatch()
    const { initUser } = userActions
    const inited = useSelector(getInited)

    useEffect(() => {
        dispatch(initUser())
    }, [dispatch, initUser])

    return (
        <Suspense fallback={<PageLoader />}>
            <div className={classNames('app')}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </div>
        </Suspense>
    )
}
