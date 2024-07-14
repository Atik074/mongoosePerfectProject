import { Request, Response } from "express"
import { catchAsynce } from "../../utils/catchAsynce"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"
import { AccademicSemesterServices } from "./accademicSemester.service"




const createAccademicSemester = catchAsynce(async(req:Request, res:Response)=>{

   

    const result = await AccademicSemesterServices.createAccademicSemesterIntoDB(req.body)

      
    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:"accademic semester is created successfullu" ,
        data:result
    })

})




export const AccademicSemesterControllers ={
    createAccademicSemester
}