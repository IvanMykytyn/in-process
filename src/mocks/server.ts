import { setupServer } from 'msw/node';
import { authHandlers } from './authHandlers';

const handlers = [...authHandlers];

export const server = setupServer(...handlers);
