
import Icon from "../Icon/Icon"
import css from "./LogOut.module.css"
export default function LogOut() {

    return(
        <button className={css.logOutText} >
            <Icon id="icon-log_out_side_bar"
        width="32"
        height="32"
        className={css.logo}/> Log Out
        </button>
    )
}