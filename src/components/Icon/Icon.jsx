import sprite from "../../assets/sprite.svg";

const Icon = ({className, width, height, id}) => {
return (

        <svg className={className} width={width} height={height}>
            <use href={`${sprite}#${id}`} />
        </svg>
)
}

export default Icon;