import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName  } from './student.interface';


const UserNameSchema = new Schema<UserName>({
    firstName:{type:String , required:true},
    middleName:{type:String},
    lastName:{type:String , required:true}
})

const GuardianSchema = new  Schema<Guardian>({
    fatherName:{type:String , required:true},
    fatherOccupation:{type:String , required:true} ,
    fatherContactNumber:{type:String , required:true},
    motherName:{type:String , required:true},
})


export const studentSchema = new Schema<Student>({
    id:{type:String ,required:true} ,
    name:UserNameSchema,
    gender:['male','female'],
    dateOfBirth:{type:String,required:true},
    bloodGroup:[ 'A+', 'A-','B+','B-','AB+','AB-','O+','O-'],
    permanentAddress:{type:String ,required:true } ,
    mailingAddress:{type:String ,required:true},
    contactNumber:{type:String },
    emmergencyContactNumber:{type:String},
    guardian:GuardianSchema,
    profileImg:{type:String ,required:true} ,
     isActive:['active' ,'blocked']
})


  export const StudentModel = model<Student>('Student' , studentSchema)