import { rest } from 'msw';

import { baseURL, urls } from 'utils/constants/urls';
import { mockedRooms } from './rooms.mocks';

const apiURL = (path: string) : string => baseURL + path

const authUrl = apiURL(urls.auth);
const usersUrl = apiURL(urls.users);
const roomsUrl = apiURL(urls.rooms);

const userDataResponse = {
  firstName: 'Roman',
  lastName: 'Yu',
  email: 'roman@incorainc.com',
  role: 'user',
  access_token: 'TOKEN',
};

const officeId = 2


export const authHandlers = [
  rest.post(`${authUrl}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userDataResponse), ctx.delay(200));
  }),

  rest.post(`${authUrl}/signup`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userDataResponse), ctx.delay(200));
  }),

  rest.get(`${usersUrl}/me`, (req, res, ctx) => {
    const userWithoutToken = { ...userDataResponse, access_token: undefined };
    return res(ctx.status(200), ctx.json(userWithoutToken), ctx.delay(200));
  }),

  rest.put(`${usersUrl}/forgotPassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),

  rest.put(`${usersUrl}/resetPassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),

  rest.put(`${usersUrl}/changePassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),

  rest.get(`${roomsUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedRooms), ctx.delay(200));
  }),
];
