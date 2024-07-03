import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName  } from './student.interface';
import validator from 'validator';

const UserNameSchema = new Schema<UserName>({
    firstName:{type:String , required:true,
        validate:{
            validator:function(value:string){
                const nameStr = value.charAt(0).toUpperCase() + value.slice(1)

                return nameStr === value
            }
        }

    },
    middleName:{type:String},
    lastName:{type:String , required:true,
        validate:{
            validator:(value:string)=>validator.isAlpha(value) ,
            message:'{VALUE} is not valid'
        }


    }
})

const GuardianSchema = new  Schema<Guardian>({
    fatherName:{type:String , required:true},
    fatherOccupation:{type:String , required:true} ,
    fatherContactNumber:{type:String , required:true},
    motherName:{type:String , required:true},
})


export const studentSchema = new Schema<Student>({
    id:{type:String ,required:[true , 'id is required']} ,
    name:{
        type:UserNameSchema ,
        required:[true , 'name is required'] ,
        maxlength:[20, 'name must be under 20 letters'],
     
    },
    gender:{
        type:String ,
        enum:{
            values:['male','female'] ,
            message:'{VALUE} is required'
        },
        required:true
    },
    dateOfBirth:{type:String,required:[true , 'data of birth must be add']},
    bloodGroup:{
        type:String ,
        enum:[ 'A+', 'A-','B+','B-','AB+','AB-','O+','O-']
    },
    permanentAddress:{type:String ,required:[ true, 'address is required'] } ,
    mailingAddress:{type:String ,required:true},
    email:{type:String ,
        validate:{
            validator:(value:string)=>validator.isEmail(value),
            message:'{VALUE} is not valid email'
        }
    } ,
    contactNumber:{type:String },
    emmergencyContactNumber:{type:String},
    guardian:GuardianSchema,
    profileImg:{type:String ,required:true} ,
     isActive:{
        type:String ,
        enum:['active' ,'blocked'] ,
        default:'active'
     }
})


  export const StudentModel = model<Student>('Student' , studentSchema)