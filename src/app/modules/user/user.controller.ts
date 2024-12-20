// import { Request, Response } from "express";
// import { UserServiceS } from "./user.service";

// // post create Student data
// const createStudent = async (req: Request, res: Response) => {
    
//     try {
//         // const student = req.body.student;
//         const { password,student: studentData } = req.body;

//         // will call service function to send this data
//         const result = await UserServiceS.createStudentIntoDB(
//             password,
//             studentData,
//         );

//         // send response
//         res.status(200).json({
//             success: true,
//             message: 'Student is created successfully.',
//             data: result
//         })
        
//     } catch (error) {
//         console.log(error);
//     }

// };

// export const UserController = {
//     createStudent,
// }


/////////
import httpStatus from 'http-status';

import {  RequestHandler } from 'express';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (
  req,
  res,
) => {
  
    const { password, student: studentData } = req.body;

    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  
});

export const UserControllers = {
  createStudent,
};