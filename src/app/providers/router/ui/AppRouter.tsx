import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'
import { AppRouteProps, routes } from '../config/routerConfig'
import { RequireAuth } from './RequireAuth'

export function AppRouter() {
    const renderWithAuth = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        )
    }, [])

    return <Routes>{routes.map(renderWithAuth)}</Routes>
}
