import { IncomingMessage, ServerResponse } from 'http';
import { IUser } from '../models.js';
import { v4 as uuidv4 } from 'uuid';
import * as users from './../users.js';
import { nonExist } from './non-exist.js';

export const postUser = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/api/users') {
    if (req.headers['content-type'] === 'application/json') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const user: IUser = JSON.parse(body);
        if (user.username && user.age && user.hobbies) {
          user.id = uuidv4();
          users.add(user);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(user));
        } else {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Request body does not contain required fields');
        }
      });
    }
  } else {
    nonExist(req, res);
  }
};
