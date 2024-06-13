import Icon from "../../Icon/Icon";
import css from "./FilterButton.module.css";
import clsx from "clsx";

const FilterButton = ({ theme }) => {
  return (
    <div className={css.filterWrapper}>
      <Icon
        className={clsx(css.iconFilter, css[theme])}
        width="16px"
        height="16px"
        id="icon-filter"
      />
      <span className={clsx(css.spanFilter, css[theme + "Filter"])}>
        Filters
      </span>
    </div>
  );
};

export default FilterButton;
