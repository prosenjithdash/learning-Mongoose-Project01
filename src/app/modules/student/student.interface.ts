

// // 1. Create an interface representing a document in MongoDB.

// import { Model, Types } from "mongoose";

// // Guardian Type
// export type TGuardian = {
//        fatherName: string;
//        fatherOccupation: string;
//        fatherContactNo: string;
//        motherName: string;
//        motherOccupation: string;
//        motherContactNo:string
// }
  
// // Name Type
// export type TUserName = {
//        firstName: string;
//        middleName: string;
//        lastName: string
// }
  
// // Local Guardian
// export type TLocalGuardian = {
//    name: string;    occupation: string;
//    contactNo: string;
//    address: string;
// }




// export type TStudent = {
//    id: string,
//    user:Types.ObjectId,

//    password:string,
//    name: TUserName,
//    gender: "male" | "female" | "other";
//    dateOfBirth?: string;
//    email: string;
//    contactNo: string;
//    emergencyContactNo: string;
//    bloodGroup?: "A+" | "A_" | "B+" | "B_" | "O+" | "O_" | "AB+" | "AB-";
//    presentAddress: string;
//    permanentAddress: string;
//    guardian: TGuardian;
//    localGuardian: TLocalGuardian;
//    profileImg?: string;
// };






// // 2. Create a Schema corresponding to the document interface.


// // File name is :
// // student.model.ts



import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isDeleted: boolean;
};

//for creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// for creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;