import {FC, useRef} from 'react'
// import Slider from 'react-slick';

// styles
import cn from 'classnames'
import css from './rooms.module.scss'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {Room} from '../../../components/index'


interface InstrumentsProps {
    id: string
};

export interface IRooms {
    id: number;
    name: string;
    img: string;
    description: string;
    floor: number;
    maxCapacity: number;
    office: number;
    equipment: InstrumentsProps[];
}

export const rooms: IRooms[] = [
    {
        id: 1,
        name: 'Room1',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 2,
        name: 'Room2',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 3,
        name: 'Room3',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 100,
        name: 'Room9',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 4,
        name: 'Room6',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 5,
        name: 'Room8',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 6,
        name: 'Room1',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 7,
        name: 'Room1',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 1,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },{
        id: 8,
        name: 'Room1',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 9,
        name: 'Room1',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
    {
        id: 10,
        name: 'Room30',
        img: 'https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg',
        description: 'the room has PS and TV.That is all what you need',
        floor: 2,
        maxCapacity: 15,
        office: 1,
        equipment: [
            {
                id: '0'
            }, {
                id: '1'
            }, {
                id: '2'
            }, {
                id: '3'
            }
        ]
    },
]

const Rooms: FC = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    return <div className={cn(css.wrapper)}>
        <ul className={cn(css.room_container)}>
            <li className={cn(css.floor)}>
                <div className={cn(css.room_container__floor)}>
                    1-st floor
                </div>
                {/*<Slider {...settings}>*/}
                <ul className={cn(css.room_container__rooms)}>
                    {rooms.filter(room => room.floor === 1).map(room =>
                        <li key={room.id}>
                            <Room room={room}/>
                        </li>
                    )}
                </ul>
            </li>

            <div className={cn(css.floor)}>
                <div className={cn(css.room_container__floor)}>
                    2-nd floor
                </div>
                {/*<Slider {...settings}>*/}
                <div className={cn(css.room_container__rooms)}>
                    {rooms.filter(room => room.floor === 2).map(room =>
                        <li key={room.id}>
                            <Room room={room}/>
                        </li>
                    )}
                </div>
            </div>
            {/*</Slider>*/}
        </ul>
    </div>
}

export {Rooms}
