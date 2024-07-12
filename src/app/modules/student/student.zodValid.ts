import { z } from 'zod';
import validator from 'validator';


const UserNameValidateSchema = z.object({
    firstName: z.string().min(1).max(20).refine(value => {
        const nameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return nameStr === value;
    }, { message: 'First name must start with an uppercase letter' }),
    middleName: z.string().optional(),
    lastName: z.string().min(1).refine(value => validator.isAlpha(value), {
        message: 'Last name must only contain alphabetic characters'
    }),
});

const GuardianValidateSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNumber: z.string().min(1),
    motherName: z.string().min(1),
});

const studentZodValidationSchema = z.object({
    id: z.string().min(1),
    password:z.string().max(20),
    name: UserNameValidateSchema,
    gender: z.enum(['male', 'female']),
    dateOfBirth: z.string().min(1),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    permanentAddress: z.string().min(1),
    mailingAddress: z.string().min(1),
    email: z.string().email({ message: 'Invalid email format' }).min(1),
    contactNumber: z.string().min(1).min(1),
    emmergencyContactNumber: z.string().min(1).min(1),
    guardian:GuardianValidateSchema,
    profileImg: z.string().min(1),
    isDeleted: z.boolean().default(true)
});

export const studentValidations ={
     studentZodValidationSchema
} 