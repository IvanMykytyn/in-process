// styles
import moment from 'moment';
// import { useEffect, useRef } from 'react';
import { getDate } from 'utils';
import { getPixelsFromTop } from '../utils';
import scss from './current-time-line.module.scss';

// TODO update position every minute
const CurrentTimeLine = () => {
  const { hour, minutes } = getDate(moment());
  // const timeLineRef = useRef<null | HTMLDivElement>(null);
  // useEffect(() => {
  //   timeLineRef?.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  // }, []);

  // 11px from top
  const styles = {
    top: getPixelsFromTop(minutes, hour, 11),
  };
  // ref={timeLineRef}
  return (
    <div  className={scss['current-time-line']} style={styles} />
  );
};

export { CurrentTimeLine };
