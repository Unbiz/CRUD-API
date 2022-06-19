import { IncomingMessage, ServerResponse } from 'http';
import { getUser } from './getUser.js';
import { getUsers } from './getUsers.js';
import { nonExist } from './non-exist.js';

export const get = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/api/users') {
    getUsers(res);
  } else if (req.url?.startsWith('/api/users/')) {
    getUser(req, res);
  } else {
    nonExist(req, res);
  }
};
