import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "/",
  ABOUT = "/about",
}

export const routes: RouteProps[] = [
    {
        path: AppRoutes.MAIN,
        element: <MainPage />,
    },

    {
        path: AppRoutes.ABOUT,
        element: <AboutPage />,
    },
];
