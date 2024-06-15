import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/auth/operations";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import css from "./LogOut.module.css";

export default function LogOut() {
  const themeType = "dark";
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <button
      className={clsx(css.logOutText, css[themeType])}
      onClick={handleClick}
    >
      <Icon
        id="icon-log_out_side_bar"
        width="32"
        height="32"
        className={clsx(css.logo, css[themeType])}
      />{" "}
      Log Out
    </button>
  );
}
