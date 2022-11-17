import {FC, useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import {IFilters} from "../../pages";

import cn from 'classnames';
import css from './DropdownMultiSelect.style.scss';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {roomActions} from "../../store";

interface FilterProps {
    selected?: string,
    setSelected?: any,
    filterItems: IFilters[],
    filterCapacity: IFilters[],
    name?: string
}

const DropdownMultiSelect: FC<FilterProps> = (({filterItems, filterCapacity, name}) => {

    const [personName, setPersonName] = useState<string[]>([]);
    const [items, setItems] = useState<number>(0);
    const [capacity, setCapacity] = useState<number>(0);



    const {rooms} = useAppSelector(state => state.rooms);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(roomActions.getAllRooms({officeId: 2, items: items, capacity: capacity}))
    }, [dispatch, items,capacity]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 300}}>
                <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label={name}/>}
                    renderValue={(selected) => selected.join(', ')}
                >
                    <div className={'filter_text'}>
                        Filter by capacity
                    </div>
                    {filterCapacity.map((name) => (
                        <MenuItem className={cn(css.menuItem)}
                                  key={name.id}
                                  value={name.name}>
                            <Checkbox checked={personName.indexOf(name.name) > -1} onClick={()=>setCapacity(name.id)}/>
                            <ListItemText primary={name.name}/>
                        </MenuItem>
                    ))}
                    <div className={'filter_text'}>
                        Filter by items
                    </div>
                    {filterItems.map((name) => (
                        <MenuItem className={cn(css.menuItem)}
                                  key={name.id}
                                  value={name.name}
                        >
                            <Checkbox checked={personName.indexOf(name.name) > -1} onClick={()=>setItems(name.id)}/>
                            <ListItemText primary={name.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
});

export {DropdownMultiSelect};