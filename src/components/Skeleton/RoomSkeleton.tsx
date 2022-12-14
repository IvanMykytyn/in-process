import React from "react";
import ContentLoader from "react-content-loader";

import css from "../Room/room.module.scss";
import cn from "classnames";
import { useAppSelector } from "../../hooks";
import { selectTheme } from "../../store";

const RoomSkeleton = () => {
  const { mode } = useAppSelector(selectTheme);

  return (
    <div className={cn(css.container)}>
      <ContentLoader
        speed={2}
        width={240}
        height={245}
        viewBox="0 0 240 245"
        backgroundColor={mode === "dark" ? "#3E3E3E" : "rgba(197,197,197,0.7)"}
        foregroundColor={
          mode === "dark" ? "rgba(109,109,109,0.5)" : "rgba(215,215,215,0.7)"
        }
      >
        <rect x="0" y="66" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="170" rx="5" ry="5" width="116" height="18" />
        <rect x="0" y="200" rx="5" ry="5" width="220" height="20" />
        <rect x="0" y="230" rx="2" ry="2" width="15" height="15" />
        <rect x="57" y="230" rx="2" ry="2" width="15" height="15" />
        <rect x="28" y="230" rx="2" ry="2" width="15" height="15" />
        <rect x="87" y="230" rx="2" ry="2" width="15" height="15" />
        <rect x="117" y="230" rx="2" ry="2" width="15" height="15" />
        <rect x="0" y="3" rx="5" ry="5" width="220" height="160" />
      </ContentLoader>
    </div>
  );
};

export { RoomSkeleton };
