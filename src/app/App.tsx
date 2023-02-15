import { classNames } from 'shared/lib'
import { useTheme } from 'shared/contexts/theme-context'
import './styles/index.scss'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { AppRouter } from './providers/router'

export function App() {
    const { theme } = useTheme()

    return (
        <Suspense fallback={<PageLoader />}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}
