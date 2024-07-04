import { Model } from "mongoose";

export type Guardian = {
    fatherName:string ,
    fatherOccupation:string ,
    fatherContactNumber:string,
    motherName:string ,

}

export type UserName ={
    firstName:string;
    middleName?:string;
    lastName:string
} 

export type Student = {
    id:string ,
    password:string ,
    name:UserName,
    gender:'male' | 'female',
    dateOfBirth:string ,
    bloodGroup?: 'A+'| 'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-',
    permanentAddress: string ,
    mailingAddress:string,
    email:string ,
    contactNumber:string,
    emmergencyContactNumber:string,
    guardian: Guardian,
    profileImg?:string ,
    isActive:'active' | 'blocked' ,
    isDeleted:boolean
}

 // create custom instance method 

// export  type StudentMethod = {
//     isUserExits(id:string) : Promise<Student | null> 
// }

// export type StudentInstanceModel = Model<Student , Record<string , never> , StudentMethod>


/// static method in mongoose 

export interface StudentStaticModel extends Model<Student>{
      isUserExistOnDB(id:string): Promise<Student | null>

}

