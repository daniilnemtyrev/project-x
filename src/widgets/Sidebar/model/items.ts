import { AppRoutes } from 'app/providers/router/config/routerConfig'
import React from 'react'
import {
    AboutIcon,
    ArticleIcon,
    MainIcon,
    ProfileIcon,
} from 'shared/assets/icons'

export interface SidebarItemType {
    textKey: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    path: AppRoutes
    authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        textKey: 'sidebar.main',
        Icon: MainIcon,
        path: AppRoutes.MAIN,
    },
    {
        textKey: 'sidebar.about',
        Icon: AboutIcon,
        path: AppRoutes.ABOUT,
    },
    {
        textKey: 'sidebar.profile',
        Icon: ProfileIcon,
        path: AppRoutes.PROFILE,
        authOnly: true,
    },
    {
        textKey: 'sidebar.articles',
        Icon: ArticleIcon,
        path: AppRoutes.ARTICLES,
        authOnly: true,
    },
]
