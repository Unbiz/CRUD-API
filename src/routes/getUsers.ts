import { IncomingMessage, ServerResponse } from 'http';
import * as users from './../users.js';

export const getUsers = (res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users.getAll()));
};
