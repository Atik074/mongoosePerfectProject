
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsynce } from "../../utils/catchAsynce";


const createStudent = catchAsynce(async(req,res,next)=>{
   
        const {password , student:studentData} = req.body
       const result = await UserServices.createStudentIntoDB(password , studentData)

        sendResponse(res ,{
          statusCode:httpStatus.OK ,
          success:true ,
          message:'user is created successfully' ,
          data:result 
        })

     })




     export const UserControllers = {
          createStudent
     }