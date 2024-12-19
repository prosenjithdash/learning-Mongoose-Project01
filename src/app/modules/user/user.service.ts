// import { object } from "zod";
// import config from "../../config";
// import { NewUser, TUser } from "./user.interface";
// import { User } from "./user.model";
// import { StudentModel } from "../student/student.model";

// const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    

//     // create a user object
//     const userData: Partial<TUser> = {};

//     // //if password is not given, use deafult password
//     // if (!password) {
//     //     // password = config.default_password as string;
//     //     password = 
//     // }
//     // else {
//     //     user.password=password
//     // }

//     userData.password = password || 'phuniversity!@#'


//     // set student role
   

//     userData.role = 'student';


//     // set manually generated id
//     userData.id = '2030100001'


//     // create a user 
//     const newUser = await User.create(userData);

//     // crate a student
//     if (Object.keys(newUser).length) {
//         // set id, _id as user
//         studentData.id = newUser.id;
//         studentData.user = newUser._id // reference _id

//         const newStudent = await StudentModel.create(studentData)
//         return newStudent;
//     }
// };


// export const UserServiceS = {
//     createStudentIntoDB,
// }


///////
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated it
  userData.id = '2030100001';

  // create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};