
import {board, tv, marker, plug, window, conditioner} from '../assets/images/icons';

export  interface Tool {
    id: string;
    alt: string;
    img: string
}

 export const tools: Tool[] = [
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
     {
        id: '3',
        alt: 'sockets',
        img: plug
    },
     {
        id: '4',
        alt: 'window',
        img: window
    },
     {
        id: '5',
        alt: 'conditioner',
        img: conditioner
    },

];