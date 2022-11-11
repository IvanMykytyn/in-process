import react,{FC,useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import {IFilters} from "../../pages"

import cn from 'classnames';
import css from './DropdownMultiSelect.style.scss';

interface FilterProps{
    selected?: string,
    setSelected?: any,
    filterItems: IFilters[],
    filterCapacity: IFilters[],
    value?: string
}

const DropdownMultiSelect: FC<FilterProps> = ({filterItems,filterCapacity,value}) =>{
    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checBekbox-label">{value}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label={value} />}
                    renderValue={(selected) => selected.join(', ')}
                >
                   <div className={'filter_text'}>
                       Filter by capacity
                   </div>
                    {filterCapacity.map((name) => (
                        <MenuItem  className={cn(css.menuItem)}
                                   key={name.id}
                                   value={name.name}>
                            <Checkbox checked={personName.indexOf(name.name) > -1} />
                            <ListItemText primary={name.name} />
                        </MenuItem>
                    ))}
                    <div className={'filter_text'}>
                        Filter by items
                    </div>
                    {filterItems.map((name) => (
                        <MenuItem  className={cn(css.menuItem)}
                                   key={name.id}
                                   value={name.name}>
                            <Checkbox checked={personName.indexOf(name.name) > -1} />
                            <ListItemText primary={name.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export {DropdownMultiSelect};