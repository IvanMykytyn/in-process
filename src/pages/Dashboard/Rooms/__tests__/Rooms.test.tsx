import { screen} from '@testing-library/react';
import { mockedRooms } from 'mocks/rooms.mocks';
import { ProtectedRoute } from 'pages/ProtectedRoute/ProtectedRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { initialRoomState, initialUserState, setupStore } from 'store';
import { clearFilter, setCapacityRanges, setEquipmentIds } from 'store/slices/filter.slice';
import { setToLocalStorage } from 'utils';
import { renderWithProviders } from 'utils/tests/test-utils';

import { Rooms } from '../Rooms';

const setup = () => {
  renderWithProviders(
    <Router>
      <Rooms />
    </Router>
  );
};

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


describe('Test Rooms page', () => {
  it('should render the component with no errors', async () => {
    setup();

    expect(await screen.findByRole('main')).toBeInTheDocument();
    
  });

  it('should display skeleton and rooms', async () => {
    setToLocalStorage('token', 'RandomString')
    const storeSetup = setupStore();
    const { store } = renderWithProviders(
      <Router>
        <ProtectedRoute>
          <Rooms />
        </ProtectedRoute>
      </Router>,
      { store: storeSetup, preloadedState: {
        auth: {
          ...initialUserState,
          user: {
            firstName: 'Roman',
            lastName: 'Yu',
            email: 'roman@incorainc.com',
            role: 'user',
            avatar_url: '',
          }
        },
      }}
    );

    const roomSkeletons = await screen.findAllByTestId('room-skeleton')
    expect(roomSkeletons[0]).toBeInTheDocument();

    const rooms = await screen.findAllByTestId('room')
    expect(rooms[0]).toBeInTheDocument();
    expect(roomSkeletons[0]).not.toBeInTheDocument();

  });


  it('should display only certain rooms', async () => {
    setToLocalStorage('token', 'RandomString')
    const storeSetup = setupStore();
    const { store } = renderWithProviders(
      <Router>
        <ProtectedRoute>
          <Rooms />
        </ProtectedRoute>
      </Router>,
      { store: storeSetup, preloadedState: {
        auth: {
          ...initialUserState,
          user: {
            firstName: 'Roman',
            lastName: 'Yu',
            email: 'roman@incorainc.com',
            role: 'user',
            avatar_url: '',
          }
        },
      }}
    );

    await store.dispatch(setEquipmentIds(5))
    
    const roomsWithConditioner = await screen.findAllByTestId('room')
    expect(roomsWithConditioner.length).toBe(3);

    await store.dispatch(setCapacityRanges([7, 200]))
    const roomsWithConditionerAndRange = await screen.findAllByTestId('room')
    expect(roomsWithConditionerAndRange.length).toBe(1);

    await store.dispatch(clearFilter())
    const rooms = await screen.findAllByTestId('room')
    expect(rooms.length).toBe(8);
  });

})

