// import { Schema, model } from 'mongoose';
// import validator from 'validator';
// import { Guardian, LocalGuardian, Student, TStudent, UserName } from './student.interface';




// // 2. Create a Schema corresponding to the document interface.




// // ...............SCHEMA CREATE START...................


// // name create schema
// const userNameSchema = new Schema<UserName>({
  
//        firstName: {
//            type: String,
//         required: [true, 'First Name is required.'],
//         trim:true,
//         maxlength: [10, 'First Name can not be more then 20 characters.'],

//         // Custom Valitors
//         validate: {
//            validator: function (value:string) {
//             const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);

//             return firstNameStr === value;
//             },
//             message:'{VALUE} is not in capitalize format',
//         }
        
//        },
//        middleName: {
//            type: String,
//        },
//        lastName: {
//            type: String,
//            required: [true, 'Last Name is required.'],
//            // CUSTOM VALITASION
//            validate: {
//                validator: (value: string) => validator.isAlpha(value),
//                message: '{VALUE} is not valid',     
//            },

//        },


  
// })


// // guardian create schema
// const guardianSchema = new Schema<Guardian>({
   
//        fatherName: {
//            type: String,
//            required: [true,'First Name is required.'],
//        },
//        fatherOccupation: {
//            type: String,
//            required: true,
//        },
//        fatherContactNo: {
//            type: String,
//            required: [true,'Last Name is required.'],
//        },
//        motherName: {
//            type: String,
//            required: true,
//        },
//        motherOccupation: {
//            type: String,
//            required: true,
//        },
//        motherContactNo:{
//            type: String,
//            required: true,
//        },


  
// })


// // localGuardian crete schema
// const localGuardianSchema = new Schema<LocalGuardian>(
//    {
//        name: {
//            type: String,
//            required: true,
//        },
//        occupation: {
//            type: String,
//            required: true,
//        },
//        contactNo: {
//            type: String,
//            required: true,
//        },
//        address: {
//            type: String,
//            required: true,
//        }
// })


// // ...............SCHEMA CREATE END...................




// // MAIN PART
// const studentSchema = new Schema<TStudent, StudentModel>({


//     id: { type: String, required: [true, 'Id is required'], unique: true },
//     user: {
//         type: Schema.Types.ObjectId,
//         required: [true, 'Id is required'], unique: true,
//       ref:'User', 
//     },
//     name: {
//         type: userNameSchema,
//         required:true
//    },
//     gender: {
//         type: String,
//         enum: {
//             values: ['male', 'female', 'other'],
//             // message:"The gender field can only be on fo the following 'male' , 'female', 'other' ."
//             message:'{VALUE} is not valid'
//         },
        
//    },
//    dateOfBirth: { type: String },
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         unique: true,
//         validate: {
//             validator: (value: string) => validator.isEmail(value),
//             message:'{VALUE} is not a valid email'
//         }
//    },
//    contactNo: { type: String, required: true },
//    emergencyContactNo: { type: String, required: true },
//    bloodGroup:{
//         type: String,
//         enum: ["A+", "A_", "B+", "B_", "O+", "O_", "AB+", "AB-"],
        
//    }, 
//    presentAddress: { type: String, required: true },
//    permanentAddress: { type: String, required: true },
//    guardian: {
//         type: guardianSchema,
//         required:true
//    },
//    localGuardian: {
//         type: localGuardianSchema,
//         required:true
//    },
//    profileImg: { type: String },
   


// });


// // Model Crete Done
// export const StudentModel = model<Student>('Student', studentSchema);
import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloogGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuradianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});

// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);