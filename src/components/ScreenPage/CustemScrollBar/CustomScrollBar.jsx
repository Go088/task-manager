import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import "./CustomScrollBar.css";
import clsx from "clsx";

const CustomScrollBar = ({ children, className, theme }) => {
  return (
    <div className={clsx(theme + "secondScrol")}>
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: "scroll" } }}
        className={className}
      >
        {children}
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default CustomScrollBar;
