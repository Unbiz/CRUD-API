import { deleteUser } from './routes/deleteUser.js';
import { get } from './routes/get.js';
import { nonExist } from './routes/non-exist.js';
import { postUser } from './routes/postUser.js';
import { putUser } from './routes/putUser.js';
import { sendServerErrorResponse } from './utils.js';

import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const id = cluster.worker?.id;
  const port = process.env.PORT;

  http
    .createServer((req, res) => {
      res.setHeader('Process-ID', process.pid);
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

  console.log(`Worker: ${id}, pid: ${process.pid}`);
}
