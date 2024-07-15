import { Request, Response } from "express"
import { catchAsynce } from "../../utils/catchAsynce"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"
import { AccademicSemesterServices } from "./accademicSemester.service"




const createAccademicSemester = catchAsynce(async(req:Request, res:Response ,next)=>{

   

    const result = await AccademicSemesterServices.createAccademicSemesterIntoDB(req.body)

      
    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:"accademic semester is created successfullu" ,
        data:result
    })

})


const getAccademicSemester =catchAsynce(async(req:Request,res:Response , next)=>{
    
    const result = await AccademicSemesterServices.getAccademicSemesterFromDB()

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'get all data is found successfully' ,
        data:result

    })
    
})


const getSingleAccademicSemester =catchAsynce(async(req:Request , res:Response , next)=>{
    
    const {semesterId} = req.params
   const result = await AccademicSemesterServices.getSingleSemesterFromDB(semesterId)


    sendResponse(res ,{
        statusCode:httpStatus.OK ,
        success:true ,
        message:"single  accademic semester is found" ,
        data:result

    })


})

const updateAccademicSemester =catchAsynce(async(req:Request , res:Response , next)=>{
    
    const {semesterId} = req.params 

   const result = await AccademicSemesterServices.updateAccademicSemesterFromDB(semesterId , req.body)


    sendResponse(res ,{
        statusCode:httpStatus.OK ,
        success:true ,
        message:"single  accademic semester is updated" ,
        data:result

    })


})


export const AccademicSemesterControllers ={
    createAccademicSemester ,
    getAccademicSemester ,
    getSingleAccademicSemester ,
    updateAccademicSemester
}