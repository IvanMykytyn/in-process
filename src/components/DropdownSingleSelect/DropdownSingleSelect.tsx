import { Autocomplete } from "@mui/material";
import { Input } from "components/Input/Input";
import { FC } from "react";

import "./dropdown-single-select.styles.scss";

interface CustomDropdownSingleSelectProps {
  value: string | null;
  handleChange: (_: any, value: string | null) => void;
  options: Array<string>;
}

const DropdownSingleSelect: FC<CustomDropdownSingleSelectProps> = ({
  value,
  handleChange,
  options,
}) => {
  return (
    <div className="single-select-dropdown">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      value={value}
      onChange={handleChange}
      renderInput={(params) => <Input {...params} />}
      />
    </div>
  );
};

export default DropdownSingleSelect;
