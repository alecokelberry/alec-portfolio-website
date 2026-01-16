import express, { Request, Response } from 'express';
import cors from 'cors';
import contactRouter from './routes/contact';
import postsRouter from './routes/posts';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Portfolio API Running');
});

app.use('/api/contact', contactRouter);
app.use('/api/posts', postsRouter);

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

export default app;
