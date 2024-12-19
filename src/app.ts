// import express, { Application, Request, Response } from 'express'
// import cors from 'cors'
// import { StudentRoutes } from './app/modules/student/student.route';
// import { UserRoutes } from './app/modules/user/user.route';
// const app : Application = express()
// // const port = 8000


// // parsers
// app.use(express.json());
// app.use(cors());

// // application routes

// //api/v1/students/create-student
// app.use('/api/v1/students', StudentRoutes);
// app.use('/api/v1/users', UserRoutes);



// const getAController = (req: Request, res: Response) => {
//   const a = 5;
//   res.send(a);
// }

// app.get('/', getAController)

// export default app;


//////////////
// FROM PH GITHUB

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlwares/globalErrorhandler';
import notFound from './app/middlwares/notFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;