import { IncomingMessage, ServerResponse } from 'http';

export const nonExist = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Requests to non-existing endpoints');
};
