import css from "./LogOut.module.css"
export default function LogOut() {
    return(
        <button className={css.logOutText} >
            <svg width="32" height="32"><use href=".../sprite.svg#icon-logout" ></use></svg> Log Out
        </button>
    )
}