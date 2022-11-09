import { SetStateType } from 'models';
import { Room } from 'models';
import moment, { Moment } from 'moment';
import { getDate, getDiffInMinutes } from 'utils';
import { cellHeight, EventProps, roomWidth, TimeSegments } from './constants';

export const getTimeSegments = (index: number): TimeSegments => {
  switch (index % 4) {
    case 0:
      return TimeSegments.Hour;
    case 1:
      return TimeSegments.min15;
    case 2:
      return TimeSegments.min30;
    case 3:
      return TimeSegments.min45;
    default:
      return TimeSegments.min15;
  }
};

export const getIsCurrentDate = (currentDate: Moment): boolean =>
  moment(currentDate).date() === moment().date();

export const getCurrentEventRoomsPosition = (rooms: Room[], id: string) =>
  rooms.findIndex((item) => item.id === id);

export const getEventPosition = (rooms: Room[], eventData: EventProps) => {
  const { start, end } = eventData;

  const durationInMinutes = getDiffInMinutes(start, end);
  const { hour: startHours, minutes: startMinutes } = getDate(start);

  const currentEventPosition = getCurrentEventRoomsPosition(rooms, eventData.roomId);

  const currentEventTimePosition = getPixelsFromTop(startMinutes, startHours);
  const currentEventHeight = Math.abs(getPixelsFromTop(durationInMinutes));

  return {
    styles: {
      left: `${roomWidth * currentEventPosition}px`,
      top: `${currentEventTimePosition}px`,
      height: `${currentEventHeight}px`,
    },
    currentEventHeight,
  };
};

export const getPixelsFromTop = (
  minutes: number,
  hours: number = 0,
  extraPixels: number = 0
): number => {
  // 24 px = cell // 1 hour = 4 cells
  // 24/15 = number of px of the 1 minute
  return hours * cellHeight * 4 + minutes * (cellHeight / 15) + extraPixels;
};

export interface CalendarTableProps {
  currentDate: Moment;
  setCurrentDate: SetStateType<Moment>;
}
