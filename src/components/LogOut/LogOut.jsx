import { useDispatch } from "react-redux"
import { logOut } from "../../redux/features/auth/operations"
import Icon from "../Icon/Icon"
import css from "./LogOut.module.css"
export default function LogOut() {
  const dispatch=  useDispatch()
    return(
        <button className={css.logOutText} onClick={dispatch(logOut())}>
            <Icon id="icon-log_out_side_bar"
        width="32"
        height="32"
        className={css.logo}/> Log Out
        </button>
    )
}