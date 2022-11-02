import {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import css from './BookingForm.module.scss';

import {Badge, Button, Input, MultipleSelectWithBadges} from 'components';
import {AutocompleteRenderInputParams, TextField} from '@mui/material';

const names = [
    'RomanGin20@incorainc.com',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const BookingForm: FC = () => {

    const navigate = useNavigate();

    const getNavigate = () => {
        navigate(-1);
    };

    const {register, handleSubmit, reset} = useForm();

    const [members, setMembers] = useState<Array<string>>([]);

    const submit = async (event: any) => {
        try {
            event = await {...event, members};
            console.log(event);
            reset();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={css.booking}>
            <div className={css.booking__wrap}>
                <div className={css.booking__image}>
                    <img
                        src={'https://images.squarespace-cdn.com/content/v1/540f5515e4b06c4e8629c108/1600932097980-NHBGP5WD2F7YIK8ZFHRA/conference-room-boardroom-business-setup.jpg?format=2500w'}
                        alt="roomg image"/>
                </div>
                <div className={css.booking__info}>

                    <h3 className={css['booking__room-name']}>
                        The Orange Room
                    </h3>
                    <div>
                        <p className={css.booking__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, omnis.
                        </p>
                    </div>
                </div>
            </div>
            <div className={css.booking__content}>
                <h3 className={css.booking__title}>
                    Book Room
                </h3>
                <form className={css.booking__form} onSubmit={handleSubmit(submit)}>
                    <label className={`${css.booking__label} ${css['booking__label--meeting']}`}>
                        <Input
                            type={'text'}
                            label={'Meeting Name'}
                            {...register('name', {required: true})}
                            fullWidth={true}
                        >
                        </Input>
                    </label>
                    <label className={`${css.booking__label} ${css['booking__label--date']}`}>
                        <Input
                            type={'date'}
                            {...register('date', {required: true})}
                            fullWidth={true}
                        >
                        </Input>
                    </label>
                    <label className={`${css.booking__label} ${css['booking__label--start-time']}`}>
                        <Input
                            type={'time'}
                            {...register('startTime', {required: true})}
                            fullWidth={true}
                        >
                        </Input>
                    </label>
                    <label className={`${css.booking__label} ${css['booking__label--end-time']}`}>
                        <Input
                            type={'time'}
                            {...register('endTime', {required: true})}
                            fullWidth={true}
                        >
                        </Input>
                    </label>
                    <label className={`${css.booking__label} ${css['booking__label--select']}`}>
                        <MultipleSelectWithBadges options={names} setSelectedOptions={setMembers}
                                                  renderInput={(params: AutocompleteRenderInputParams) => (
                                                      <TextField {...params} />
                                                  )}
                        />
                    </label>
                    <div className={css.btn}>
                        <Button type={'button'}
                                fullWidth={true}
                                onClick={getNavigate}
                        >
                            Back
                        </Button>
                        <Button type={'submit'}
                                fullWidth={true}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export {BookingForm};