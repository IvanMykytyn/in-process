import React, { Dispatch, SetStateAction, FC } from 'react';
import {
  Autocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  Chip,
  TextField,
} from '@mui/material';

// styles
import cn from 'classnames';
import './multiple-select-with-badges.styles.scss';

interface CustomProps {
  setSelectedOptions: Dispatch<SetStateAction<Array<string>>>;
  options?: Array<string>;
  expandSize?: boolean;
  handleInputChange?: () => void;
  inputError?: boolean;
  inputTextError?: string;
  customHandleChange?: (e: React.SyntheticEvent, values: string[]) => void;
}

type AutocompleteSetup = AutocompleteProps<
  string,
  true,
  undefined,
  boolean | undefined,
  React.ElementType<any>
>;

const MultipleSelectWithBadges: FC<CustomProps & AutocompleteSetup> = ({
  setSelectedOptions,
  handleInputChange,
  options = [],
  expandSize,
  inputError,
  inputTextError,
  customHandleChange,
  ...rest
}) => {
  const handleChange = (e: React.SyntheticEvent, values: string[]) => {
    setSelectedOptions(values);
  };

  return (
    <div
      className={cn('multi-select', {
        'multi-select-large': !!expandSize,
        'multi-select__error': inputError,
      })}
    >
      <Autocomplete
        multiple
        options={options}
        onChange={customHandleChange || handleChange}
        renderTags={(value: readonly string[], getTagProps) => (
          <div className="badges-container">
            {value.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                size="small"
                label={option}
                {...getTagProps({ index })}
              />
            ))}
          </div>
        )}
        {...rest}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField {...params} error={inputError} helperText={inputTextError} />
        )}
      />
    </div>
  );
};

export { MultipleSelectWithBadges };
