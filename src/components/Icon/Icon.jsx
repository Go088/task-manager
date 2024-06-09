import sprite from "@icons/sprite.svg";

const Icon = ({className, width, height, id}) => {
return (
    <div>
        <svg className={className} width={width} height={height}>
            <use href={`${sprite}#${id}`} />
        </svg>
    </div>
)
}

export default Icon;