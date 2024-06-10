import ButtonCreate from "../Button Create/ButtonCreate";
import LogOut from "../LogOut/LogOut";
import css from "./SideBar.module.css";
import Icon from "../Icon/Icon";

export default function SideBar() {
  return (
    <div className={css.list}>
      <div className={css.Logolist}>
        <div className={css.LogoContainer}>
          <Icon id="icon-logo" width="12" height="16" className={css.LogoSVG} />
        </div>
        <h1 className={css.textLogo}>Task Pro</h1>
      </div>
      <p className={css.listItem}>My boards</p>
      <ButtonCreate />
      <LogOut />
    </div>
  );
}
