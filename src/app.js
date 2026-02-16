import express from 'express';
import cors from 'cors';
import documentRoutes from './routes/documentRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    // this.app.use('/api/documents', documentRoutes);
  }
}

export default new App().app;
