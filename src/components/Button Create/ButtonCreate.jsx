import css from "../Button Create/ButtonCreate.module.css"
import sprite from "../../sprite.svg"

export default function ButtonCreate(){
    return(
        <div className={css.list}>
            <h2 className={css.text}>Create a <br/>new board</h2>
            <button type="button" className={css.button}>
            <svg width="40" height="36"> <use xlinkHref={`${sprite}#icon-icon-Logo`}></use></svg>
            </button>

        </div>
    )
}
