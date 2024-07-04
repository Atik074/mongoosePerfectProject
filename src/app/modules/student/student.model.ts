import { Schema, model } from 'mongoose';
import { Guardian, Student, StudentStaticModel, UserName  } from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt'
import config from '../../config';


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


export const studentSchema = new Schema<Student , StudentStaticModel>({
    id:{type:String ,required:[true , 'id is required'],unique:true} ,
    password:{type:String ,required:[true , 'password is required'],unique:true ,  maxlength:[20 , 'password is not big than 20 letters']} ,
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
     } ,
     isDeleted:{
         type:Boolean,
         default:false
        
      }
      
} 
 
)



//middleware pre and post 
 studentSchema.pre('save' , async function(next){

   this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_round) )

  next() ;

}) 

 studentSchema.post('save' , function(doc ,next){
    doc.password = " "
    next()
 })

/// query midle ware 

 studentSchema.pre('find', function(next){

    this.find({isDelete:{$ne:true}})
     next()
     
 })

 studentSchema.pre('findOne', function(next){

    this.find({isDelete:{$ne:true}})
     next()

 })
/// usigng aggregate to delete successfully
 studentSchema.pre('aggregate', function(next){

    this.pipeline().unshift({$match:{isDeleted:{$ne:true}}})
    
     next()

 })


/// custome instance method 
//  studentSchema.methods.isUserExits =  async function(id:string){
//     const existingUser = StudentModel.findOne({id}) 
//     return existingUser ;

// }

// statice method in mongoose 
 studentSchema.statics.isUserExistOnDB = async function(id:string){
    const existingUser = await StudentModel.findOne({id})

    return existingUser ;
 }

  export const StudentModel = model<Student , StudentStaticModel>('Student' , studentSchema)