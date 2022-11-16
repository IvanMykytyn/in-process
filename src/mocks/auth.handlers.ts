import { rest } from 'msw';

import { baseURL, urls } from 'utils/constants/urls';

const authUrl = baseURL + urls.auth;
const UsersUrl = baseURL + urls.users;

const userDataResponse = {
  firstName: 'Roman',
  lastName: 'Yu',
  email: 'roman@incorainc.com',
  role: 'user',
  access_token: 'TOKEN',
};

export const authHandlers = [
  rest.post(`${authUrl}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userDataResponse), ctx.delay(200));
  }),

  rest.post(`${authUrl}/signup`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userDataResponse), ctx.delay(200));
  }),

  rest.get(`${UsersUrl}/me`, (req, res, ctx) => {
    const userWithoutToken = { ...userDataResponse, access_token: undefined };
    return res(ctx.status(200), ctx.json(userWithoutToken), ctx.delay(200));
  }),

  rest.put(`${UsersUrl}/forgotPassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),

  rest.put(`${UsersUrl}/resetPassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),

  rest.put(`${UsersUrl}/changePassword`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(200));
  }),
];
