import http from 'http';
import { deleteUser } from './routes/deleteUser.js';
import { get } from './routes/get.js';
import { nonExist } from './routes/non-exist.js';
import { postUser } from './routes/postUser.js';
import { putUser } from './routes/putUser.js';
import { sendServerErrorResponse } from './utils.js';
import process from 'process';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    try {
      switch (req.method) {
        case 'GET':
          get(req, res);
          break;

        case 'POST':
          postUser(req, res);
          break;

        case 'PUT':
          putUser(req, res);
          break;

        case 'DELETE':
          deleteUser(req, res);
          break;

        default:
          nonExist(req, res);
          break;
      }
    } catch {
      sendServerErrorResponse(res);
    }
  })
  .listen(port);

console.log(`Server running at http://localhost:${port}/`);
