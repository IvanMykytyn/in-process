import {Button, Input} from 'components';
import {FC} from 'react';
import {useForm} from 'react-hook-form';

import css from './BookingForm.module.scss';

const BookingForm: FC = () => {
    const {register, handleSubmit, reset} = useForm();

    const submit = async (e: any) => {
        try {
            await console.log(e);
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
                    <Button type={'submit'} fullWidth={true}>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
        ;
};

export {BookingForm};