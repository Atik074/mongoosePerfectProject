import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalHandlerError';
import notFound from './app/middleware/notFound';
import router from './app/routes';


// parser
app.use(express.json());
app.use(cors());


  app.use('/api/v1', router)
 
app.get('/', (req: Request, res: Response) => {
  res.send('mongose server running');
});


// global middleware 
  app.use(globalErrorHandler)
  
  //Not found middleware 
  app.use(notFound)


export default app;
