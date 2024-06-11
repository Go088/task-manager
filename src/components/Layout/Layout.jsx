import css from "./Layout.module.css";
import { useEffect } from "react";

export default function Layout({ children, theme }) {
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme", "violet-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return <div className={css.container}>{children}</div>;
}
