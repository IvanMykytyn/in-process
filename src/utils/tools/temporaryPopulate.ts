import { BookingInterface } from 'models';
import { Room } from 'models';
import moment, { Moment } from 'moment';
import { v4 as uuidv4 } from 'uuid';

export const rooms: Room[] = [
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

export const bookings: BookingInterface[] = [
  {
    id: 1,
    name: 'Oyoloo',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    roomId: rooms[1 - 1].id,
    start: '2022-05-02T01:45:18Z',
    end: '2022-05-02T03:00:18Z',
    users: [
      {
        firstName: 'Nap',
        lastName: 'Wallbank',
        email: 'nwallbank0@wiley.com',
        role: 'admin',
      },
      {
        firstName: 'Jelene',
        lastName: 'Sandon',
        email: 'jsandon1@prlog.org',
        role: 'admin',
      },
      {
        firstName: 'Benedick',
        lastName: 'Roff',
        email: 'broff2@canalblog.com',
        role: 'admin',
      },
      {
        firstName: 'Chris',
        lastName: 'Amorts',
        email: 'camorts3@whitehouse.gov',
        role: 'admin',
      },
      {
        firstName: 'Brigit',
        lastName: 'Matokhnin',
        email: 'bmatokhnin4@nps.gov',
        role: 'user',
      },
      {
        firstName: 'Pauly',
        lastName: 'Kilmaster',
        email: 'pkilmaster5@google.com.hk',
        role: 'user',
      },
      {
        firstName: 'Joelynn',
        lastName: 'Cridland',
        email: 'jcridland6@blogtalkradio.com',
        role: 'user',
      },
      {
        firstName: 'Livvy',
        lastName: 'Wisniewski',
        email: 'lwisniewski7@facebook.com',
        role: 'user',
      },
      {
        firstName: 'Rheta',
        lastName: 'Hardaway',
        email: 'rhardaway8@java.com',
        role: 'user',
      },
      {
        firstName: 'Feliza',
        lastName: 'Deinhard',
        email: 'fdeinhard9@omniture.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 2,
    name: 'Rhyloo',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    roomId: rooms[4 - 1].id,
    start: '2022-02-25T13:00:06Z',
    end: '2022-02-25T14:30:06Z',
    users: [
      {
        firstName: 'Tabbitha',
        lastName: 'Spreckley',
        email: 'tspreckley0@home.pl',
        role: 'user',
      },
    ],
  },
  {
    id: 3,
    name: 'Edgeblab',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    roomId: rooms[5 - 1].id,
    start: '2022-04-29T23:34:11Z',
    end: '2022-04-30T02:00:11Z',
    users: [
      {
        firstName: 'Dorise',
        lastName: 'Jacke',
        email: 'djacke0@seesaa.net',
        role: 'admin',
      },
      {
        firstName: 'Brook',
        lastName: 'Pitcock',
        email: 'bpitcock1@exblog.jp',
        role: 'user',
      },
      {
        firstName: 'Virgina',
        lastName: 'Semonin',
        email: 'vsemonin2@netlog.com',
        role: 'user',
      },
      {
        firstName: 'Una',
        lastName: 'Silcock',
        email: 'usilcock3@4shared.com',
        role: 'admin',
      },
      {
        firstName: 'Minne',
        lastName: 'Leith',
        email: 'mleith4@facebook.com',
        role: 'user',
      },
      {
        firstName: 'Gothart',
        lastName: 'Mancer',
        email: 'gmancer5@unicef.org',
        role: 'admin',
      },
    ],
  },
  {
    id: 459,
    name: 'Eire',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T09:53:56Z',
    end: '2022-11-15T11:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
      {
        firstName: 'Saudra',
        lastName: 'Duggan',
        email: 'sduggan1@spotify.com',
        role: 'user',
      },
      {
        firstName: 'Rriocard',
        lastName: 'Airds',
        email: 'rairds2@youtube.com',
        role: 'user',
      },
      {
        firstName: 'Darcie',
        lastName: 'Batty',
        email: 'dbatty3@wiley.com',
        role: 'admin',
      },
      {
        firstName: 'Nels',
        lastName: 'de Aguirre',
        email: 'ndeaguirre4@sakura.ne.jp',
        role: 'admin',
      },
      {
        firstName: 'Alex',
        lastName: 'Meneyer',
        email: 'ameneyer5@opensource.org',
        role: 'admin',
      },
      {
        firstName: 'Kassi',
        lastName: 'Elies',
        email: 'kelies6@deliciousdays.com',
        role: 'user',
      },
      {
        firstName: 'Marsha',
        lastName: 'Birch',
        email: 'mbirch7@ftc.gov',
        role: 'admin',
      },
      {
        firstName: 'Herc',
        lastName: 'Tomasicchio',
        email: 'htomasicchio8@yellowpages.com',
        role: 'user',
      },
    ],
  },
  {
    id: 4,
    name: 'Eireрр',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T09:53:56Z',
    end: '2022-11-15T11:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 48,
    name: 'Eiregg',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T12:53:56Z',
    end: '2022-11-15T13:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 49,
    name: 'Eiresehee',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T16:53:56Z',
    end: '2022-11-15T18:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 41,
    name: 'Eiresehsehseh',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T20:53:56Z',
    end: '2022-11-15T21:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 42,
    name: 'Eiresehsehseh',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T22:53:56Z',
    end: '2022-11-15T23:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 43,
    name: 'Eiresehsehseh',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T09:53:56Z',
    end: '2022-11-15T11:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 44,
    name: 'Eiresehesh',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    roomId: rooms[3 - 1].id,
    start: '2022-11-15T09:53:56Z',
    end: '2022-11-15T11:53:56Z',
    users: [
      {
        firstName: 'Alfred',
        lastName: 'Molineaux',
        email: 'amolineaux0@shutterfly.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 5,
    name: 'Dynabox',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    roomId: rooms[4 - 1].id,
    start: '2022-03-17T22:35:00Z',
    end: '2022-03-17T23:15:00Z',
    users: [
      {
        firstName: 'Concettina',
        lastName: 'Gadeaux',
        email: 'cgadeaux0@sina.com.cn',
        role: 'user',
      },
      {
        firstName: 'Reynold',
        lastName: 'Conwell',
        email: 'rconwell1@skyrock.com',
        role: 'user',
      },
      {
        firstName: 'Kimbell',
        lastName: 'Peakman',
        email: 'kpeakman2@webeden.co.uk',
        role: 'user',
      },
      {
        firstName: 'Ainslie',
        lastName: 'MacLachlan',
        email: 'amaclachlan3@freewebs.com',
        role: 'admin',
      },
      {
        firstName: 'Reginauld',
        lastName: 'Lamb',
        email: 'rlamb4@tiny.cc',
        role: 'admin',
      },
      {
        firstName: 'Ulrica',
        lastName: 'Nucciotti',
        email: 'unucciotti5@ifeng.com',
        role: 'admin',
      },
      {
        firstName: 'Ingar',
        lastName: 'Kilby',
        email: 'ikilby6@wix.com',
        role: 'user',
      },
    ],
  },
  {
    id: 6,
    name: 'Skalith',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    roomId: rooms[2 - 1].id,
    start: '2022-04-24T11:30:26Z',
    end: '2022-04-24T12:30:26Z',
    users: [
      {
        firstName: 'Deny',
        lastName: 'Akaster',
        email: 'dakaster0@yahoo.co.jp',
        role: 'admin',
      },
      {
        firstName: 'Philippe',
        lastName: 'Segge',
        email: 'psegge1@salon.com',
        role: 'user',
      },
      {
        firstName: 'Consuelo',
        lastName: 'Hagergham',
        email: 'chagergham2@moonfruit.com',
        role: 'user',
      },
      {
        firstName: 'Pru',
        lastName: 'Heephy',
        email: 'pheephy3@nifty.com',
        role: 'user',
      },
      {
        firstName: 'Egor',
        lastName: 'Strangeways',
        email: 'estrangeways4@phoca.cz',
        role: 'admin',
      },
    ],
  },
  {
    id: 7,
    name: 'Oyoba',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    roomId: rooms[2 - 1].id,
    start: '2022-03-29T10:10:29Z',
    end: '2022-03-29T12:10:29Z',
    users: [
      {
        firstName: 'Joceline',
        lastName: 'Gibbons',
        email: 'jgibbons0@epa.gov',
        role: 'user',
      },
      {
        firstName: 'Cristen',
        lastName: 'Quantrill',
        email: 'cquantrill1@nationalgeographic.com',
        role: 'user',
      },
      {
        firstName: 'Thorn',
        lastName: 'Rollett',
        email: 'trollett2@tinyurl.com',
        role: 'user',
      },
      {
        firstName: 'Jeno',
        lastName: 'Millward',
        email: 'jmillward3@upenn.edu',
        role: 'user',
      },
      {
        firstName: 'Granger',
        lastName: 'Cristol',
        email: 'gcristol4@discovery.com',
        role: 'user',
      },
      {
        firstName: 'Beverlee',
        lastName: 'Benedikt',
        email: 'bbenedikt5@craigslist.org',
        role: 'user',
      },
      {
        firstName: 'Karlie',
        lastName: 'Breach',
        email: 'kbreach6@feedburner.com',
        role: 'user',
      },
      {
        firstName: 'Iolanthe',
        lastName: 'Prue',
        email: 'iprue7@umn.edu',
        role: 'user',
      },
      {
        firstName: 'Arleyne',
        lastName: 'McGarrity',
        email: 'amcgarrity8@shinystat.com',
        role: 'admin',
      },
    ],
  },
  {
    id: 8,
    name: 'Vinder',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    roomId: rooms[4 - 1].id,
    start: '2022-04-30T09:10:20Z',
    end: '2022-04-30T10:30:20Z',
    users: [
      {
        firstName: 'Lionello',
        lastName: 'Brotherhood',
        email: 'lbrotherhood0@imgur.com',
        role: 'user',
      },
      {
        firstName: 'Ursula',
        lastName: 'Brace',
        email: 'ubrace1@oaic.gov.au',
        role: 'admin',
      },
      {
        firstName: 'Garrick',
        lastName: 'Cleare',
        email: 'gcleare2@mit.edu',
        role: 'user',
      },
    ],
  },
  {
    id: 9,
    name: 'Edgetag',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    roomId: rooms[9 - 1].id,
    start: '2022-04-06T04:40:23Z',
    end: '2022-04-06T05:20:23Z',
    users: [
      {
        firstName: 'Rosalyn',
        lastName: 'Addionisio',
        email: 'raddionisio0@usa.gov',
        role: 'admin',
      },
    ],
  },
  {
    id: 10,
    name: 'Zoomcast',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    roomId: rooms[4 - 1].id,
    start: '2021-12-17T22:55:31Z',
    end: '2021-12-17T23:50:31Z',
    users: [
      {
        firstName: 'Jenilee',
        lastName: 'Hatherleigh',
        email: 'jhatherleigh0@spotify.com',
        role: 'admin',
      },
      {
        firstName: 'Janie',
        lastName: 'Foxen',
        email: 'jfoxen1@shop-pro.jp',
        role: 'user',
      },
      {
        firstName: 'Valentia',
        lastName: 'Newsham',
        email: 'vnewsham2@etsy.com',
        role: 'user',
      },
    ],
  },
  {
    id: 11,
    name: 'Flipstorm',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    roomId: rooms[2 - 1].id,
    start: '2022-08-01T01:50:41Z',
    end: '2022-08-01T03:00:41Z',
    users: [
      {
        firstName: 'Martyn',
        lastName: 'Tregunnah',
        email: 'mtregunnah0@independent.co.uk',
        role: 'admin',
      },
      {
        firstName: 'Andriette',
        lastName: 'Greg',
        email: 'agreg1@live.com',
        role: 'admin',
      },
      {
        firstName: 'Terrence',
        lastName: 'Ottey',
        email: 'tottey2@accuweather.com',
        role: 'user',
      },
      {
        firstName: 'Pauly',
        lastName: 'Cardoso',
        email: 'pcardoso3@youku.com',
        role: 'user',
      },
      {
        firstName: 'Prudi',
        lastName: 'Langmead',
        email: 'plangmead4@cnbc.com',
        role: 'user',
      },
      {
        firstName: 'Gladi',
        lastName: 'De Winton',
        email: 'gdewinton5@columbia.edu',
        role: 'admin',
      },
    ],
  },
  {
    id: 12,
    name: 'Photolist',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    roomId: rooms[10 - 1].id,
    start: '2022-01-09T14:45:42Z',
    end: '2022-01-09T16:45:42Z',
    users: [
      {
        firstName: 'Andi',
        lastName: 'Sigward',
        email: 'asigward0@umich.edu',
        role: 'user',
      },
      {
        firstName: 'Mariette',
        lastName: 'Meneely',
        email: 'mmeneely1@cnn.com',
        role: 'user',
      },
      {
        firstName: 'Randolf',
        lastName: 'Benedit',
        email: 'rbenedit2@jalbum.net',
        role: 'admin',
      },
      {
        firstName: 'Malynda',
        lastName: 'Ekell',
        email: 'mekell3@pen.io',
        role: 'admin',
      },
      {
        firstName: 'Claire',
        lastName: 'Wingham',
        email: 'cwingham4@amazon.co.jp',
        role: 'user',
      },
      {
        firstName: 'Blakeley',
        lastName: 'Tumilson',
        email: 'btumilson5@indiegogo.com',
        role: 'user',
      },
    ],
  },
  {
    id: 13,
    name: 'Roomm',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    roomId: rooms[1 - 1].id,
    start: '2021-11-12T12:35:36Z',
    end: '2021-11-12T15:15:36Z',
    users: [
      {
        firstName: 'Judd',
        lastName: 'Kmietsch',
        email: 'jkmietsch0@earthlink.net',
        role: 'user',
      },
      {
        firstName: 'Pansie',
        lastName: 'Bembrigg',
        email: 'pbembrigg1@europa.eu',
        role: 'user',
      },
      {
        firstName: 'Ivie',
        lastName: 'Beardsley',
        email: 'ibeardsley2@google.co.uk',
        role: 'user',
      },
      {
        firstName: 'Georgianne',
        lastName: 'Allmark',
        email: 'gallmark3@ucsd.edu',
        role: 'admin',
      },
      {
        firstName: 'Cy',
        lastName: 'Hawkswood',
        email: 'chawkswood4@tumblr.com',
        role: 'user',
      },
      {
        firstName: 'Dominik',
        lastName: 'Bawles',
        email: 'dbawles5@prnewswire.com',
        role: 'user',
      },
      {
        firstName: 'Patric',
        lastName: 'Queyos',
        email: 'pqueyos6@feedburner.com',
        role: 'admin',
      },
      {
        firstName: 'Myrilla',
        lastName: 'Minigo',
        email: 'mminigo7@google.ca',
        role: 'admin',
      },
    ],
  },
  {
    id: 14,
    name: 'Shufflebeat',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    roomId: rooms[2 - 1].id,
    start: '2022-09-12T17:45:57Z',
    end: '2022-09-12T18:45:57Z',
    users: [
      {
        firstName: 'Aldous',
        lastName: 'Drage',
        email: 'adrage0@google.ru',
        role: 'user',
      },
      {
        firstName: 'Fern',
        lastName: 'Whatsize',
        email: 'fwhatsize1@latimes.com',
        role: 'admin',
      },
      {
        firstName: 'Justis',
        lastName: 'Houseago',
        email: 'jhouseago2@scientificamerican.com',
        role: 'user',
      },
    ],
  },
  {
    id: 15,
    name: 'Topiczoom',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    roomId: rooms[2 - 1].id,
    start: '2022-05-31T02:16:05Z',
    end: '2022-05-31T05:40:05Z',
    users: [
      {
        firstName: 'Thorin',
        lastName: 'Killoran',
        email: 'tkilloran0@devhub.com',
        role: 'admin',
      },
    ],
  },
];
