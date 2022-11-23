import {
  room1,
  room2,
  room7,
  room12,
  room11,
  room10,
  room9,
  room8,
  room6,
  room4,
  room3,
} from '../../assets/images/bg';

export interface Photo {
  id: number;
  img: string;
}

export const photos: Photo[] = [
  {
    id: 0,
    img: room12,
  },
  {
    id: 1,
    img: room1,
  },
  {
    id: 2,
    img: room2,
  },
  {
    id: 3,
    img: room3,
  },
  {
    id: 4,
    img: room4,
  },
  {
    id: 5,
    img: room9,
  },
  {
    id: 6,
    img: room6,
  },
  {
    id: 7,
    img: room7,
  },
  {
    id: 8,
    img: room8,
  },
  {
    id: 9,
    img: room9,
  },
  {
    id: 10,
    img: room10,
  },
  {
    id: 11,
    img: room11,
  },
  {
    id: 12,
    img: room4,
  },
];
export const getRoomImage = (id: number = 0): string => {
  const currentPhoto = photos.find((photo) => photo.id === id);

  return currentPhoto?.img ?? '';
};
