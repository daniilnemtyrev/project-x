import { getUserData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from '../config/routerConfig'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserData)
    const location = useLocation()

    if (!auth) {
        return (
            <Navigate to={AppRoutes.MAIN} state={{ from: location }} replace />
        )
    }

    return children
}
