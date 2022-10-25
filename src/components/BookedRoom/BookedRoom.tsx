import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import moment from 'moment';

import css from './BookedRoom.module.scss';
import {clock, calendar, staffIcon, board, tv, marker} from '../../assets/images/icons';

import {Data} from "components/SideBar/SideBar";

interface Tool {
    id: string;
    alt: string;
    img: string
}

interface Props {
    room: Data;
}

const tools: Tool[] = [
    {
        id: '0',
        alt: 'board',
        img: board
    },
    {
        id: '1',
        alt: 'tv',
        img: tv
    },
    {
        id: '2',
        alt: 'marker',
        img: marker
    },
];

const BookedRoom: FC<Props> = ({room: {roomId, answer: {date, room, time, instruments}}}) => {

    const getCurrentDateTime = moment();
    const getRoomDateTime = moment(`${date} ${time.hours}:${time.minuts}:00`);

    const minutes = getRoomDateTime.diff(getCurrentDateTime, 'minutes');
    const hours = getRoomDateTime.diff(getCurrentDateTime, 'hours');
    const days = getRoomDateTime.diff(getCurrentDateTime, 'days');
    const months = getRoomDateTime.diff(getCurrentDateTime, 'months');


    return (
        <ul className={minutes > 0 ? `${css.booked__item}` : `${css.booked__item} ${css.red}`}>
            <li className={css.booked__info}>
                <div>
                    Room {room}
                </div>
            </li>
            <ul className={css.booked__time}>
                <li className={css.booked__info}>
                    <img src={calendar} alt="Data" height={15} width={15}/>
                    <span>
                        {date}
                    </span>
                </li>
                <li className={css.booked__info}>
                    <img src={clock} alt="Time" height={15} width={15}/>
                    {
                        minutes <= 0 ?
                            <span>
                                It's already started
                            </span>
                            :
                            ''
                    }
                    {
                        minutes < 60 && minutes > 0 ?
                            <span>
                               {minutes > 1 ?
                                   `In ${minutes} Minutes`
                                   :
                                   `In ${months} Month`
                               }
                            </span>
                            :
                            ''
                    }
                    {
                        hours < 24 && hours > 0 ?
                            <span>
                             {hours > 1 ?
                                 `In ${hours} Hours`
                                 :
                                 `In ${hours} Hour`
                             }
                            </span>
                            :
                            ''
                    }
                    {
                        days < 31 && days > 0 ?
                            <span>
                            {days > 1 ?
                                `In ${days} Days`
                                :
                                `In ${days} Day`
                            }
                            </span>
                            :
                            ''
                    }
                    {
                        months <= 12 && months > 0 ?
                            <span>
                            {months > 1 ?
                                `In ${months} Months`
                                :
                                `In ${months} Month`
                            }
                            </span>
                            :
                            ''
                    }
                </li>
            </ul>
            <li className={css.booked__staff}>
                <img src={staffIcon} alt="staff" width={15} height={15}/>
                <div className={css.booked__wrap}>
                <span>
                    Tools:
                </span>
                    <ul className={css.booked__icons}>
                        {
                            tools.map((tool, i) =>
                                instruments.map(inst => inst.id === tool.id ?
                                    <li key={tool.id}>
                                        {
                                            <img
                                                src={tool.img}
                                                alt={tool.alt}
                                                width={15}
                                                height={15}/>
                                        }
                                    </li>
                                    :
                                    ''
                                )
                            )}
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export {BookedRoom};