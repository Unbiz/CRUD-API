import { IncomingMessage, ServerResponse } from 'http';
import { uuidValidateV4 } from '../utils.js';
import * as users from './../users.js';
import { nonExist } from './non-exist.js';

export const deleteUser = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith('/api/users/')) {
    const userId = req.url.split('/')[3] || '';
    const isValidUserId = uuidValidateV4(userId);
    if (isValidUserId) {
      if (users.isUserExist(userId)) {
        users.remove(userId);
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end('User deleted');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('User not found');
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('User ID not valid');
    }
  } else {
    nonExist(req, res);
  }
};
