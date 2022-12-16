import React, { Dispatch, SetStateAction, FC, useRef } from 'react';
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
  handleChange: (e: React.SyntheticEvent, values: string[]) => void;
  options?: Array<string>;
  expandSize?: boolean;
  handleInputChange?: () => void;
  inputError?: boolean;
  inputTextError?: string;
  label?: string;
}

type AutocompleteSetup = AutocompleteProps<
  string,
  true,
  undefined,
  boolean | undefined,
  React.ElementType<any>
>;

const MultipleSelectWithBadges: FC<CustomProps & AutocompleteSetup> = ({
  handleChange,
  handleInputChange,
  options = [],
  expandSize,
  inputError,
  label,
  inputTextError,
  ...rest
}) => {


  const badgeContainerRef = useRef<null | HTMLInputElement>(null);

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
        onChange={(e: React.SyntheticEvent, members: string[]) => {
          badgeContainerRef?.current?.scrollIntoView({ behavior: 'smooth' });

          return handleChange(e, members);
        }}
        disablePortal={true}
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
            {/* <div ref={badgeContainerRef} /> */}
          </div>
        )}
        {...rest}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField {...params} error={inputError} helperText={inputTextError} label={label}/>
        )}
      />
    </div>
  );
};

export { MultipleSelectWithBadges };
