
import ButtonCreate from "../Button Create/ButtonCreate"
import sprite from "../../sprite.svg"
import LogOut from "../LogOut/LogOut"
import css from "./SideBar.module.css"


export default function SideBar(){
    
  
    return(

    <div className={css.list}>
        <div className={css.Logolist}>
            <svg width="32" height="32" className={css.LogoSVG}><use xlinkHref={`${sprite}#icon-icon-Logo`}></use></svg>
            <h1 className={css.textLogo}>Task Pro</h1>
        </div>
        <p className={css.listItem}>My boards</p>
        <ButtonCreate />
        <LogOut/>

        </div>
    )
}