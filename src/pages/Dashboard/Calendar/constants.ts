import { v4 as uuidv4 } from 'uuid';

const roomWidth = 140;
const blankAngleWidth = 60;
const cellHeight = 24;
const numberOfCellsPerHour = 4;
const countOfHoursInADay = 24;

enum TimeSegments {
  Hour = 'hour',
  min15 = 'min15',
  min30 = 'min30',
  min45 = 'min15',
};

const totalCells = Array.from(
  { length: cellHeight * numberOfCellsPerHour },
  (_, i) => uuidv4()
);

const clockHours = Array.from({ length: countOfHoursInADay }, (_, i) => i);

export {
  roomWidth,
  blankAngleWidth,
  TimeSegments,
  totalCells,
  clockHours,
  cellHeight,
};
