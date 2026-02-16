import 'dotenv/config';
import http from 'http';
import { Server } from 'socket.io';

import app from './app.js';
import database from './config/database.js';
// import DocumentSocket from './sockets/DocumentSocket.js';

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: '*' }
});

// io.on('connection', (socket) => {
//   new DocumentSocket().register(io, socket);
// });



// Initialize database connection
database.connect().then((connected) => {
  if (connected) {
    server.listen(process.env.PORT, () => {
      console.log(`🚀 CollabCore running on port ${process.env.PORT}`);
    });
  } else {
    console.error('Failed to connect to database. Server not started.');
    process.exit(1);
  }
}).catch((error) => {
  console.error('Failed to initialize database:', error);
  process.exit(1);
});
