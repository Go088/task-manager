import { useSelector } from "react-redux";
import clsx from "clsx";

import s from "../CardTooltip/CardTooltip.module.css";

import { selectTheme } from "../../../redux/features/theme/selectors";

export default function DeadlineTooltip() {

    const themeType = useSelector(selectTheme);


    return (
        <div className={clsx(s.wrap, s[themeType])}>        <p className={clsx(s.text, s[themeType])}>
            Deadline is <span className={clsx(s.span)}>comming up </span>
        </p></div>

    );
}
