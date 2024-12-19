// // VALIDATION
// // 1. ZOD input, 2. create schema, 3. build in z object

// import { z } from "zod";

// const userValidationSchema = z.object({

//     // id: z.string(), id dorker nai id auto genarate hobe
//     password: z
//         .string({
//             invalid_type_error:'Password must be string'
//         })
//         .max(20, { message: 'Password can not be more than 20 characters' })
//         .optional() // password admin set korte paren or na     o korte pare         
//     ,

//     // model er maddome need password set kortechi
//     // needsPasswordChange: z.boolean().optional().default(true),
    
//     // role api endpoint thke set korbo
//     // role: z.enum(['student', 'faculty', 'admin']),

//     // bidefault in-progress set hobe
//     // status: z.enum(['in-progress', 'blocked']).default('in-progress'),

//     // vaidefault set kore dibo
//     // isDeleted: z.boolean().optional().default(false)
    
// });

// export const UserValidation = {
//     userValidationSchema,
// }

//////

import { z } from 'zod';

const userValidationSchema = z.object({
  pasword: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};