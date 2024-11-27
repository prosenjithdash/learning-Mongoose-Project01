import exp from 'constants';
import { Schema, model, connect } from 'mongoose';


// 1. Create an interface representing a document in MongoDB.


export type Guardian = {
       fatherName: string;
       fatherOccupation: string;
       fatherContactNo: string;
       motherName: string;
       motherOccupation: string;
       motherContactNo:string
}
  
// Name Type
export type UserName = {
       firstName: string;
       middleName: string;
       lastName: string
}
  
// Local Guardian
export type LocalGuardian = {
   name: string;    occupation: string;
   contactNo: string;
   address: string;
}




export type Student = {
   id: string,
   name: UserName,
   gender: "male" | "female";
   dateOfBirth: string;
   email: string;
   contactNo: string;
   emergencyContactNo: string;
   bloodGroup?: "A+" | "A_" | "B+" | "B_" | "O+" | "O_" | "AB+" | "AB-";
   presentAddress: string;
   permanentAddress: string;
   guardian: Guardian;
   localGuardian: LocalGuardian;
   profileImg?: string;
   isActive: 'active' | 'blocked';
};






// 2. Create a Schema corresponding to the document interface.


// File name is :
// student.model.ts
