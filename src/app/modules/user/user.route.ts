// //STUDENT ROUTE
// import express from 'express'
// import { UserController } from './user.controller';

// const router = express.Router()

// // will call controller function

// // insert students data
// router.post('/create-student', UserController.createStudent)


// export const UserRoutes = router;


////////

import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;