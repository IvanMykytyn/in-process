import React, { FC } from 'react';
import cn from 'classnames';
import { SvgIconComponent } from '@mui/icons-material';
import { TextField, TextFieldProps } from '@mui/material';

import './input.styles.scss';

import PasswordInput from './PasswordInput';

interface InputCustomProps {
  icon?: SvgIconComponent;
  errorText?: string;
}

const Input: FC<TextFieldProps & InputCustomProps> = React.forwardRef(
  ({ type, icon: Icon, error, fullWidth, errorText, ...rest }, ref) => {
    return (
      <div
        className={cn('text-field', {
          'text-field__password': type === 'password',
          'text-field__error': error,
          'text-field__full-width': fullWidth,
          'text-field__icon': Icon,
        })}
      >
        {Icon && <div className="text-field__icon-wrapper">{<Icon />}</div>}

        {type === 'password' ? (
          <PasswordInput
            error={error}
            fullWidth={fullWidth}
            inputRef={ref}
            {...rest}
          />
        ) : (
          <TextField
            type={type}
            variant="outlined"
            fullWidth={fullWidth}
            inputRef={ref}
            {...rest}
          />
        )}
        {errorText && <span className="text-field__errorText">{errorText}</span>}
      </div>
    );
  }
);

export { Input };
