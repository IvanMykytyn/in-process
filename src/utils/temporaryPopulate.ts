import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

interface Room {
  id: string;
  name: string;
  description: string;
}

const rooms: Room[] = [
  {
    id: uuidv4(),
    name: 'Room 1',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 2',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 3',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 4',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 5',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 6',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 7',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 8',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 9',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 10',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
  {
    id: uuidv4(),
    name: 'Room 11',
    description:
      'iste rerum! Cumque ratione nisi veritatis adipisci architecto enim, veniam ducimus?',
  },
];

interface Event {
  id: string;
  name: string;
  description: string;
  roomId: string;
  startDate: string;
  endDate: string;
}

const events: Event[] = [
  {
    id: uuidv4(),
    name: 'Team Meeting Team Meeting Team Meeting Team Meeting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[1 - 1].id,
    startDate: '2022-11-02 09:20',
    endDate: '2022-11-02 11:30',
  },
  {
    id: uuidv4(),
    name: 'Catch Up',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[2 - 1].id,
    startDate: '2022-11-02 10:20',
    endDate: '2022-11-02 11:20',
  },
  {
    id: uuidv4(),
    name: 'Marketing Meeting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[2 - 1].id,
    startDate: '2022-11-02 15:10',
    endDate: '2022-11-02 19:00',
  },
  {
    id: uuidv4(),
    name: 'Client Visit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[5 - 1].id,
    startDate: '2022-11-02 09:00',
    endDate: '2022-11-02 11:30',
  },
  {
    id: uuidv4(),
    name: 'Global HR meeting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[9 - 1].id,
    startDate: '2022-11-02 16:30',
    endDate: '2022-11-02 20:30',
  },
  {
    id: uuidv4(),
    name: 'Dev Scrum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[3 - 1].id,
    startDate: '2022-11-02 09:30',
    endDate: '2022-11-02 11:30',
  },
  {
    id: uuidv4(),
    name: 'Sales Meeting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[3 - 1].id,
    startDate: '2022-11-02 12:00',
    endDate: '2022-11-02 19:30',
  },
  {
    id: uuidv4(),
    name: 'Team Meeting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[6 - 1].id,
    startDate: '2022-11-02 12:40',
    endDate: '2022-11-02 13:00',
  },
  {
    id: uuidv4(),
    name: 'Board Games',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[1 - 1].id,
    startDate: '2022-11-02 19:20',
    endDate: '2022-11-02 20:00',
  },
  {
    id: uuidv4(),
    name: 'Night Board Games',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum.',
    roomId: rooms[3 - 1].id,
    startDate: '2022-11-02 01:00',
    endDate: '2022-11-02 02:00',
  },
];

export { rooms, events };
export type { Room, Event };
