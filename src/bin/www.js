import * as http from 'http';
import pino from 'pino';

import app from '../app';

const logger = pino({ level: process.env.LEVEL });
const server = http.createServer(app.callback());

const onListening = () => {
  logger.debug(`Server listening on ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
};

const onClose = () => {
  logger.debug('Server closing, bye!');
};

const onError = error => {
  if (error.syscall !== 'listen') throw error;

  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${process.env.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.listen(process.env.PORT);
server.on('close', onClose);
server.on('error', onError);
server.on('listening', onListening);
