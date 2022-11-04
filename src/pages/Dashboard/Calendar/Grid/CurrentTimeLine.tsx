// styles
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { getDate } from 'utils';
import { getPixelsFromTop } from '../utils';
import scss from './current-time-line.module.scss';

// TODO implement scroll to now on open
// TODO update position every minute

const CurrentTimeLine = () => {
  const { hour, minutes } = getDate(moment());
  const timeLineRef = useRef<null | HTMLDivElement>(null);

  // TODO Scroll to NOW
  // useEffect(() => {
  //   timeLineRef?.current?.scrollIntoView({ block: 'center'});
  // }, []);

  // 11px from top
  const styles = {
    top: getPixelsFromTop(minutes, hour, 11),
  };

  return (
    <div ref={timeLineRef} className={scss['current-time-line']} style={styles} />
  );
};

export { CurrentTimeLine };
