import { FC, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import cn from "classnames";
import css from "./DropdownMultiSelect.style.scss";
import { useAppDispatch, useAppSelector } from "hooks";

import {
  setEquipmentIds,
  setCapacityRanges,
  setFilterItems,
} from "store/slices/filter.slice";
import { setFilteredRooms } from "store";
import { CapacityRangeProps, EquipmentsProps, IRooms } from "models";

interface FilterProps {
  filterRange: EquipmentsProps[];
  filterCapacity?: CapacityRangeProps[];
  rooms: IRooms[];
}

const DropdownMultiSelect: FC<FilterProps> = ({
  filterRange,
  filterCapacity,
  rooms,
}) => {
  const { equipmentIds, capacityRanges, filterItems } = useAppSelector(
    (state) => state.filterRoom
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filteredRooms = rooms.filter((room) => {
      const currentEquipments = room.equipments.map((item) => item.id);
      const isValidEquipment = equipmentIds.every((id) =>
        currentEquipments.includes(id)
      );

      const capacity = room.maxCapacity;
      const isCapacitySelected = capacityRanges.length === 0;
      const isValidCapacity =
        isCapacitySelected ||
        capacityRanges.some(
          (range) => capacity >= range[0] && capacity <= range[1]
        );

      return isValidEquipment && isValidCapacity;
    });
    dispatch(setFilteredRooms(filteredRooms));
  }, [equipmentIds, capacityRanges, dispatch, rooms]);

  const onChangeEquipmentIds = (id: number) => {
    dispatch(setEquipmentIds(id));
  };
  const onChangeCapacityRanges = (range: [number, number]) => {
    dispatch(setCapacityRanges(range));
  };

  const handleChange = (event: SelectChangeEvent<typeof filterItems>) => {
    const {
      target: { value },
    } = event;
    dispatch(
      setFilterItems(typeof value === "string" ? value.split(",") : value)
    );
  };

  return (
    <div className={cn("filter_form")}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          className={"filter_form__input"}
        >
          Filter
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterItems}
          onChange={handleChange}
          input={<OutlinedInput label={"Filter"} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={{ disablePortal: true }}
        >
          <div className={css.filter_text}>Filter by capacity</div>
          {filterCapacity &&
            filterCapacity.map((item) => (
              <MenuItem
                className={cn("menuItem")}
                key={item.id}
                value={item.name}
                onClick={() => onChangeCapacityRanges(item.range)}
              >
                <Checkbox checked={filterItems.indexOf(item.name) > -1} />
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
          <div className={css.filter_text}>Filter by items</div>
          {filterRange.map((item) => (
            <MenuItem
              className={cn("menuItem")}
              key={item.id}
              value={item.name}
              onClick={() => onChangeEquipmentIds(item.id)}
            >
              <Checkbox checked={filterItems.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { DropdownMultiSelect };
