import { classNames } from "shared/lib";

import type { PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkVarinats {
  PRIMARY = "primary",
  INVERTED = "inverted",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVarinats;
}

export function AppLink({
    to,
    className,
    children,
    variant = AppLinkVarinats.PRIMARY,
    ...rest
}: PropsWithChildren<AppLinkProps>) {
    return (
        <Link
            {...rest}
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[variant]])}
        >
            {children}
        </Link>
    );
}
