// import { useEffect } from "react";
import Icon from "../../Icon/Icon";
import css from "./FilterButton.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { selectFilter } from "../../../redux/features/filter/selectors";
import { setFilter } from "../../../redux/features/filter/slice";

const FilterButton = ({ theme, isFilterOpen, setIsFilterOpen }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = (filt) => {
    dispatch(setFilter(filt));
  };

  return (
    <div className={css.cont}>
      <div onClick={() => setIsFilterOpen(true)} className={css.filterWrapper}>
        <Icon
          className={clsx(css.iconFilter, css[filter])}
          width="16px"
          height="16px"
          id="icon-filter"
        />
        <span className={clsx(css.spanFilter, css[theme])}>Filters</span>
      </div>
      {isFilterOpen}
      <div className={clsx(css.backDrop, isFilterOpen && css.isActive)}>
        <div className={clsx(css.modalWrapper, isFilterOpen && css.isActive)}>
          <p className={css.filterText}>Filters</p>
          <div className={css.filterLine}></div>
          <div className={css.chooseAllWrapper}>
            <p className={css.chooseText}>Label color</p>
            <button
              onClick={() => handleFilter("all")}
              className={css.ChooseButton}
              type="button"
            >
              Show all
            </button>
          </div>
          <ul className={css.priorityList}>
            <li
              onClick={() => handleFilter("without")}
              className={clsx(
                css.priorityLi,
                filter === "without" && css.isActive
              )}
            >
              <span
                className={clsx(
                  css.withoutSpan,
                  css.selectSpan,
                  filter === "without" && css.isActive
                )}
              ></span>
              <p>Without priority</p>
            </li>
            <li
              onClick={() => handleFilter("low")}
              className={clsx(css.priorityLi, filter === "low" && css.isActive)}
            >
              <span
                className={clsx(
                  css.lowSpan,
                  css.selectSpan,
                  filter === "low" && css.isActive
                )}
              ></span>
              <p>Low</p>
            </li>
            <li
              onClick={() => handleFilter("medium")}
              className={clsx(
                css.priorityLi,
                filter === "medium" && css.isActive
              )}
            >
              <span
                className={clsx(
                  css.mediumSpan,
                  css.selectSpan,
                  filter === "medium" && css.isActive
                )}
              ></span>
              <p>Medium</p>
            </li>
            <li
              onClick={() => handleFilter("high")}
              className={clsx(
                css.priorityLi,
                filter === "high" && css.isActive
              )}
            >
              <span
                className={clsx(
                  css.highSpan,
                  css.selectSpan,
                  filter === "high" && css.isActive
                )}
              ></span>
              <p>High</p>
            </li>
          </ul>
          <button
            onClick={() => setIsFilterOpen(false)}
            className={css.closeButton}
            type="button"
          >
            <Icon
              className={clsx(css.iconClose, css[theme])}
              width="16px"
              height="16px"
              id="icon-x-close_modal"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
