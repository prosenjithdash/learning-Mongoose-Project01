// //STUDENT ROUTE
// import express from 'express'
// import { studentController } from './student.controller'
// const router = express.Router()

// // will call controller function

// // insert students data
// // router.post('/create-student', studentController.createStudent)

// // get students data
// router.get('/', studentController.getAllStudents);

// // get single student data
// router.get('/:studentId', studentController.getSingleStudent);

// export const StudentRoutes = router;


/////////

import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;