import css from "./Container.module.css"

const Container = ({children}) => {
    return (
        <section>
            <div className={css.container}>
                {children}
            </div>
        </section>
    )
}

export default Container;