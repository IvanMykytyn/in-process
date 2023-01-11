// styles
import moment from "moment";
import { useEffect, useState } from "react";
import { getDate } from "utils";
import { getPixelsFromTop } from "../utils";
import scss from "./current-time-line.module.scss";

const CurrentTimeLine = () => {
  const { hour, minutes } = getDate(moment());

  // 11px from top
  const [top, setTop] = useState<number>(getPixelsFromTop(minutes, hour, 11));

  useEffect(() => {
    function getInterval() {
      let lastMinutes = minutes;
      return setInterval(function () {
        if (moment().minutes() !== lastMinutes) {
          lastMinutes = moment().minutes();
          setTop(getPixelsFromTop(minutes, hour, 11));
        }
      }, 5000);
    }
    const interval = getInterval();
    return () => {
      clearInterval(interval);
    };
  }, [hour, minutes]);

  return <div className={scss["current-time-line"]} style={{ top: `${top}px` }} />;
};

export { CurrentTimeLine };
