import Icon from "../../Icon/Icon";
import css from "./FilterButton.module.css";

const FilterButton = () => {
  return (
    <div className={css.filterWrapper}>
      <Icon
        className={css.iconFilter}
        width="16px"
        height="16px"
        id="icon-filter"
      />
      <span className={css.spanFilter}>Filters</span>
    </div>
  );
};

export default FilterButton;
