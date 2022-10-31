import React, { FC } from 'react';
import {
  Button,
  ButtonGroup as ButtonGroupMui,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import './button-group.style.scss';
import { TimeRange } from 'pages';
import { SetStateType } from 'models';

interface ButtonGroupProps {
  timeRange: TimeRange;
  setTimeRange: SetStateType<TimeRange>;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ timeRange, setTimeRange }) => {
  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: TimeRange
  ) => {
    setTimeRange(newAlignment);
  };

  return (
    <div className="button-group-container">
      <ToggleButtonGroup exclusive value={timeRange} onChange={handleAlignment}>
        <ToggleButton value={TimeRange.Day} aria-label="left aligned">
          Day
        </ToggleButton>
        <ToggleButton value={TimeRange.Week} aria-label="centered">
          Week
        </ToggleButton>
        <ToggleButton value={TimeRange.Month} aria-label="right aligned">
          Month
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export { ButtonGroup };
