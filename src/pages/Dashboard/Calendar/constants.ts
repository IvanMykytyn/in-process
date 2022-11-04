import { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Event, rooms } from 'utils';

const roomWidth = 140;
const blankAngleWidth = 60;
const countOfRooms = rooms.length;
const cellHeight = 24;
const numberOfCellsPerHour = 4;
const countOfHoursInADay = 24;
const dayCalendarWidth = countOfRooms * roomWidth + blankAngleWidth;

enum TimeSegments {
  Hour = 'hour',
  min15 = 'min15',
  min30 = 'min30',
  min45 = 'min15',
}

const totalCells = Array.from(
  { length: cellHeight * numberOfCellsPerHour },
  (_, i) => uuidv4()
);

const totalColumns = Array.from({ length: countOfRooms }, (_, i) => uuidv4());
const clockHours = Array.from({ length: countOfHoursInADay }, (_, i) => i);

interface EventProps extends Omit<Event, 'startDate' | 'endDate'> {
  startDate: Moment;
  endDate: Moment;
}

export {
  roomWidth,
  blankAngleWidth,
  countOfRooms,
  TimeSegments,
  totalCells,
  totalColumns,
  clockHours,
  cellHeight,
  dayCalendarWidth,
};

export type { EventProps };
