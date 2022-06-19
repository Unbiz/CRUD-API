import { version as uuidVersion, validate as uuidValidate } from 'uuid';
import { IncomingMessage, ServerResponse } from 'http';

export const uuidValidateV4 = (uuid: string): boolean => {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
};

export const sendServerErrorResponse = (res: ServerResponse) => {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Server error');
};
