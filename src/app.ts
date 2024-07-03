import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
// const port = 3000

// parser
app.use(express.json());
app.use(cors());

  app.use('/api/v1/students' , studentRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('mongose server running');
});

export default app;
