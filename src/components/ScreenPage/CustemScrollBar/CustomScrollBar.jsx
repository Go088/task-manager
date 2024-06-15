import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import "./CustomScrollBar.css";
import clsx from "clsx";

const CustomScrollBar = ({ children, className, theme, isVisibal }) => {
  return (
    <div className={clsx(theme + "secondScrol", !isVisibal && "isHiden")}>
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
