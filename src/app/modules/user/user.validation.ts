import { z } from "zod";



const userValidSchema = z.object({
      
    id:z.string() ,
    password:z.string({
        invalid_type_error: "Password must be a string"
    }).max(20 ,{message:"password can not be more tha 20 characters"}),
    needsPasswordChange:z.boolean().optional().default(true),
  
})


export const UserValidation = {
    userValidSchema
}