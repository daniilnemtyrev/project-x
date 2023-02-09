import { classNames } from "shared/lib";
import { Theme, useTheme } from "shared/contexts/theme-context";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { Button } from "shared/ui/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
}
