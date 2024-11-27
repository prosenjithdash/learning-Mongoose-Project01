// STUDENT CONTROLLER
import { Request, Response } from "express";
import { StudentServices } from "./student.service";

// post create Student data
const createStudent = async (req: Request, res: Response) => {
    
    try {
        // const student = req.body.student;
        const { student: studentData } = req.body;

        // will call service function to send this data
        const result = await StudentServices.createStudentIntoDB(studentData);

        // send response
        res.status(200).json({
            success: true,
            message: 'Student is created successfully.',
            data: result
        })
        
    } catch (error) {
        console.log(error);
    }

};

// get Student data
const getAllStudents = async (req:Request, res:Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();

        // send response
        res.status(200).json({
            success: true,
            message: 'Students are retrieved  successfully.',
            data: result,
        });

    } catch (error) {
        console.log(error);
    }
}

// get single Student data
const getSingleStudent = async (req:Request, res:Response) => {
    try {
        // const studentId = req.params.studentId;
        const {studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentId);

        // send response
        res.status(200).json({
            success: true,
            message: 'Student is retrieved  successfully.',
            data: result,
        });

    } catch (error) {
        console.log(error);
    }
}
export const studentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}