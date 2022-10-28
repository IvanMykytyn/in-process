import React, {Dispatch, SetStateAction, FC} from 'react';
import {
    Autocomplete,
    AutocompleteProps,
    AutocompleteRenderInputParams,
    Chip,
    TextField,
} from '@mui/material';

// styles
import './multiple-select-with-badges.styles.scss';

interface CustomProps {
    options: Array<string>;
    setSelectedOptions: Dispatch<SetStateAction<Array<string>>>;
    noOptionsText?: string;
}

// string[], true, undefined, undefined, React.ElementType<any>
const MultipleSelectWithBadges: FC<CustomProps &
    AutocompleteProps<string, true, undefined, undefined, React.ElementType<any>>> = ({
                                                                                          setSelectedOptions,
                                                                                          noOptionsText,
                                                                                          options,
                                                                                          ...rest
                                                                                      }) => {

    const handleChange = (e: React.SyntheticEvent, values: string[]) => {
        setSelectedOptions(values);
    };

    return (
        <div className={'multi-select'}>
            <Autocomplete
                multiple
                options={options}
                noOptionsText={noOptionsText}
                onChange={handleChange}
                renderTags={(value: readonly string[], getTagProps) => (
                    <div className="badges-container">
                        {value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                size="small"
                                label={option}
                                {...getTagProps({index})}
                            />
                        ))}
                    </div>
                )}
                {...rest}
                renderInput={(params: AutocompleteRenderInputParams) => (
                    <TextField {...params} />
                )}
            />
        </div>
    );
};

export {MultipleSelectWithBadges};
