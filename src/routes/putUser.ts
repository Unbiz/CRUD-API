import { IncomingMessage, ServerResponse } from 'http';
import { IUser } from '../models.js';
import { uuidValidateV4 } from '../utils.js';
import * as users from './../users.js';
import { nonExist } from './non-exist.js';

export const putUser = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith('/api/users/')) {
    const userId = req.url.split('/')[3];
    const isValidUserId = uuidValidateV4(userId);
    if (isValidUserId) {
      if (req.headers['content-type'] === 'application/json') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          const user: IUser = JSON.parse(body);
          if (users.isUserExist(userId)) {
            if (user.username && user.age && user.hobbies) {
              user.id = userId;
              users.updateUser(user);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(user));
            } else {
              res.writeHead(400, { 'Content-Type': 'text/plain' });
              res.end('Request body does not contain required fields');
            }
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('User not found');
          }
        });
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Content-Type header must be application/json');
      }
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('User ID not valid');
    }
  } else {
    nonExist(req, res);
  }
};
