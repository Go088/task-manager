import css from "../Button Create/ButtonCreate.module.css"

export default function ButtonCreate(){
    return(
        <div className={css.list}>
            <h2 className={css.text}>Create a <br/>new board</h2>
            <button type="button" className={css.button}>
            <svg width="40" height="36"><use href="./sprite.svg#icon-block"></use></svg>
            </button>

        </div>
    )
}
