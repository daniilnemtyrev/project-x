import { classNames } from 'shared/lib/classNames'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { AppRouter } from './providers/router'

export function App() {
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
