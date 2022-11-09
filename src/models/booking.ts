import { User } from './user';

interface Booking {
  id: number;
  start: string;
  end: string;
  name: string;
  description: string;
  roomId: string;
  users: Array<User>;
}

export type {Booking};
