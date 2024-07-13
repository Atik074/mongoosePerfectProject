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
  
};



export interface StudentStaticModel extends Model<TStudent> {
  isUserExistOnDB(id: string): Promise<TStudent | null>;
}
