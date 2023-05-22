import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOT_FOUND = '*',
}

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean
}

export const routes: AppRouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },

    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
    },
    {
        path: AppRoutes.PROFILE,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <NotFoundPage />,
    },
]
