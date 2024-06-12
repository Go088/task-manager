const Icon = ({ className, width, height, id }) => {
  const spritePath = new URL("../../assets/sprite.svg", import.meta.url).href;
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${spritePath}#${id}`} />
    </svg>
  );
};

export default Icon;
