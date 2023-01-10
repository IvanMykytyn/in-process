import React, { FC } from 'react';
import { Input, InputCustomProps } from 'components';
import { TextFieldProps } from '@mui/material';

// styles
import scss from './settings.module.scss';

interface SectionInputProps extends InputCustomProps {
  text?: string;
}

const SectionInput: FC<TextFieldProps & SectionInputProps> = React.forwardRef(
  ({ label, text, ...rest }, ref) => {
    return (
      <div className={scss['section-input']}>
        <p className={scss['section-input__label']}>{text ?? label}:</p>
        <Input label={undefined} {...rest} ref={ref} />
      </div>
    );
  }
);

export { SectionInput };
