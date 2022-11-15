import { UserInterface } from './user.interface';

interface BookingInterface {
  id: number;
  start: string;
  end: string;
  name: string;
  description: string;
  roomId: string;
  users: Array<UserInterface>;
}

export type {BookingInterface};
