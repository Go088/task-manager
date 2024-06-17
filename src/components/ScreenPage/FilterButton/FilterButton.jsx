import { useState } from "react";
import Icon from "../../Icon/Icon";
import css from "./FilterButton.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAllCards } from "../../../redux/features/boardss/selectors";

const FilterButton = ({ theme }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const allCards = useSelector(selectAllCards);

  return (
    <div className={css.cont}>
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
      {isFilterOpen}
      <div className={css.modalWrapper}>
        <p className={css.filterText}>Filters</p>
        <div className={css.filterLine}></div>
        <div className={css.chooseAllWrapper}>
          <p className={css.chooseText}>Label color</p>
          <button className={css.ChooseButton} type="button">
            Show all
          </button>
        </div>
        <ul className={css.priorityList}>
          <li className={clsx(css.priorityLi, css.isActive)}>
            <span
              className={clsx(css.withoutSpan, css.selectSpan, css.isActive)}
            ></span>
            <p>Without priority</p>
          </li>
          <li className={clsx(css.priorityLi)}>
            <span className={clsx(css.lowSpan, css.selectSpan)}></span>
            <p>Low</p>
          </li>
          <li className={clsx(css.priorityLi)}>
            <span className={clsx(css.mediumSpan, css.selectSpan)}></span>
            <p>Medium</p>
          </li>
          <li className={clsx(css.priorityLi)}>
            <span className={clsx(css.highSpan, css.selectSpan)}></span>
            <p>High</p>
          </li>
        </ul>
        <button className={css.closeButton} type="button">
          <Icon
            className={clsx(css.iconClose, css[theme])}
            width="16px"
            height="16px"
            id="icon-x-close_modal"
          />
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
