import { classNames } from "shared/lib";
import { useTheme } from "shared/contexts/theme-context";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
