import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';




// 2. Create a Schema corresponding to the document interface.




// ...............SCHEMA CREATE START...................


// name create schema
const userNameSchema = new Schema<UserName>({
  
       firstName: {
           type: String,
           required: true,
       },
       middleName: {
           type: String,
       },
       lastName: {
           type: String,
           required: true,
       },


  
})


// guardian create schema
const guardianSchema = new Schema<Guardian>({
   
       fatherName: {
           type: String,
           required: true,
       },
       fatherOccupation: {
           type: String,
           required: true,
       },
       fatherContactNo: {
           type: String,
           required: true,
       },
       motherName: {
           type: String,
           required: true,
       },
       motherOccupation: {
           type: String,
           required: true,
       },
       motherContactNo:{
           type: String,
           required: true,
       },


  
})


// localGuardian crete schema
const localGuardianSchema = new Schema<LocalGuardian>(
   {
       name: {
           type: String,
           required: true,
       },
       occupation: {
           type: String,
           required: true,
       },
       contactNo: {
           type: String,
           required: true,
       },
       address: {
           type: String,
           required: true,
       }
})


// ...............SCHEMA CREATE END...................




// MAIN PART
const studentSchema = new Schema<Student>({


   id: { type: String },
   name: userNameSchema,
   gender: ['male', 'female'],
   dateOfBirth: { type: String },
   email: { type: String, required: true },
   contactNo: { type: String, required: true },
   emergencyContactNo: { type: String, required: true },
   bloodGroup: ["A+", "A_", "B+", "B_", "O+", "O_", "AB+", "AB-"],
   presentAddress: { type: String, required: true },
   permanentAddress: { type: String, required: true },
   guardian: guardianSchema,
   localGuardian:localGuardianSchema,
   profileImg: { type: String },
   isActive: ['active', 'blocked']


});


// Model Crete Done
export const StudentModel = model<Student>('Student', studentSchema);