import { Dispatch, FC, SetStateAction, useState } from 'react';
import './select.styles.scss';
import cn from 'classnames';

import {
  Select as SelectMui,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';

interface CustomSelectProps {
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
  options: Array<string>;
  disabled?: boolean;
  count?: number;
}

const Select: FC<SelectProps & CustomSelectProps> = ({
  value,
  handleChange,
  options,
  disabled,
  count,
  ...rest
}) => {
  return (
    <div className="custom-select">
      <SelectMui value={value} onChange={handleChange} disabled={disabled}>
        {options.map((option) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
              {!!count && count > 1 && 's'}
            </MenuItem>
          );
        })}
      </SelectMui>
    </div>
  );
};

export { Select };
