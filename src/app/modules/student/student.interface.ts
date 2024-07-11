import { Model, Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  permanentAddress: string;
  mailingAddress: string;
  email: string;
  contactNumber: string;
  emmergencyContactNumber: string;
  guardian: Guardian;
  profileImg?: string;
  isDeleted: boolean;
};

// create custom instance method

// export  type StudentMethod = {
//     isUserExits(id:string) : Promise<Student | null>
// }

// export type StudentInstanceModel = Model<Student , Record<string , never> , StudentMethod>

/// static method in mongoose

export interface StudentStaticModel extends Model<TStudent> {
  isUserExistOnDB(id: string): Promise<TStudent | null>;
}
