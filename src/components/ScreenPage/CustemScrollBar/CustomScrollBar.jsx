import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import "./CustomScrollBar.css";
import clsx from "clsx";
import { useMemo, useState } from "react";
import useMedia from "../../../hooks/useMediaQuery";

const CustomScrollBar = ({ children, className, theme, isVisibal }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const containerStyle = useMemo(
    () => ({
      height: `${windowHeight - 294}px`,
    }),
    [windowHeight]
  );

  return (
    <div className={clsx(theme + "secondScrol", !isVisibal && "isHiden")}>
      <OverlayScrollbarsComponent
        style={useMedia().isDesktop ? containerStyle : {}}
        options={{ scrollbars: { autoHide: "scroll" } }}
        className={className}
      >
        {children}
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default CustomScrollBar;
