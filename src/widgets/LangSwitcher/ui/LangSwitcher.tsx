import { classNames } from "shared/lib";
import cls from "./LangSwitcher.module.scss";

import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({
  className,
}: PropsWithChildren<LangSwitcherProps>) {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={changeLang}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
}
