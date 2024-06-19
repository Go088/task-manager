import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/auth/operations";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import css from "./LogOut.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/features/theme/selectors";

export default function LogOut() {
  const themeType = useSelector(selectTheme);
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
