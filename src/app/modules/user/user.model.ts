import { TUser } from './user.interface';
import {model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import config from '../../config';




export const userSchema = new Schema({
   
    id:{type:String , required:true  , unique:true} ,
    password:{type:String , required:true},
    needsPasswordChange:{type:Boolean , default:true},
    role:{
        type:String ,
        enum:["student" ,"admin" , "faculty"],
        required:true
    },
    status:{
        type:String ,
        enum:["in-progess" , "blocked" ],
        required:true,
        default:('in-progess')
    },
    isDeleted:{
        type:Boolean ,
        default:false
    }
},{
    timestamps:true
}
)


//middleware pre and post
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bcrypt_salt_round),
    );
  
    next();
    
  });
  
  userSchema.post('save', function (doc, next) {
    doc.password = ' ';
    next();

  });






export const User = model<TUser>('User', userSchema);
