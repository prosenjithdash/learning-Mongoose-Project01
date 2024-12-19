// // STUDENT CONTROLLER
// import { Request, Response } from "express";
// import { StudentServices } from "./student.service";



// // get Student data
// const getAllStudents = async (req:Request, res:Response) => {
//     try {
//         const result = await StudentServices.getAllStudentsFromDB();

//         // send response
//         res.status(200).json({
//             success: true,
//             message: 'Students are retrieved  successfully.',
//             data: result,
//         });

//     } catch (error) {
//         console.log(error);
//     }
// }

// // get single Student data
// const getSingleStudent = async (req:Request, res:Response) => {
//     try {
//         // const studentId = req.params.studentId;
//         const {studentId } = req.params;
//         const result = await StudentServices.getSingleStudentFromDB(studentId);

//         // send response
//         res.status(200).json({
//             success: true,
//             message: 'Student is retrieved  successfully.',
//             data: result,
//         });

//     } catch (error) {
//         // send response
//         res.status(500).json({
//             success: false,
//             message: 'Something went wrong.',
//             err: error,
//         });
//     }
// }
// export const studentController = {
//     getAllStudents,
//     getSingleStudent
// }























// // import { NextFunction, Request, Response } from 'express';
// // import httpStatus from 'http-status';
// // import sendResponse from '../../utils/sendResponse';
// // import { StudentServices } from './student.service';

// // const getSingleStudent = async (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction,
// // ) => {
// //   try {
// //     const { studentId } = req.params;
// //     const result = await StudentServices.getSingleStudentFromDB(studentId);

// //     sendResponse(res, {
// //       statusCode: httpStatus.OK,
// //       success: true,
// //       message: 'Student is retrieved succesfully',
// //       data: result,
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// // const getAllStudents = async (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction,
// // ) => {
// //   try {
// //     const result = await StudentServices.getAllStudentsFromDB();

// //     sendResponse(res, {
// //       statusCode: httpStatus.OK,
// //       success: true,
// //       message: 'Student are retrieved succesfully',
// //       data: result,
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// // const deleteStudent = async (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction,
// // ) => {
// //   try {
// //     const { studentId } = req.params;
// //     const result = await StudentServices.deleteStudentFromDB(studentId);

// //     sendResponse(res, {
// //       statusCode: httpStatus.OK,
// //       success: true,
// //       message: 'Student is deleted succesfully',
// //       data: result,
// //     });
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// // export const StudentControllers = {
// //   getAllStudents,
// //   getSingleStudent,
// //   deleteStudent,
// // };

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

import { StudentServices } from './student.service';

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};