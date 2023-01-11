import { Autocomplete } from "@mui/material";
import { Input } from "components/Input/Input";
import { FC } from "react";

import cn from 'classnames';
import "./dropdown-single-select.styles.scss";

interface CustomDropdownSingleSelectProps {
  value: string | null;
  handleChange: (_: any, value: string | null) => void;
  options: Array<string>;
  inputError?: boolean;
  inputTextError?: string;
  
}

const DropdownSingleSelect: FC<CustomDropdownSingleSelectProps> = ({
  value,
  handleChange,
  options,
  inputError,
  inputTextError,
}) => {
  return (
    <div className={cn("single-select-dropdown", {"single-select-dropdown__error": inputError})}>
      <Autocomplete
        disablePortal
        options={options}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <Input {...params} error={inputError} errorText={inputTextError} />}
      />
    </div>
  );
};

export default DropdownSingleSelect;
