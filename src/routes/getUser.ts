import { IncomingMessage, ServerResponse } from 'http';
import { uuidValidateV4 } from '../utils.js';
import * as users from './../users.js';

export const getUser = (req: IncomingMessage, res: ServerResponse) => {
  const userId = req.url?.split('/')[3] || '';
  const isValidUserId = uuidValidateV4(userId);
  if (isValidUserId) {
    if (users.isUserExist(userId)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users.get(userId!)));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('User not found');
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('User ID not valid');
  }
};
