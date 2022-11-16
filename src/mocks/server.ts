import { setupServer } from 'msw/node';
import { authHandlers } from './auth.handlers';

const handlers = [...authHandlers];

export const server = setupServer(...handlers);
