import { AcademicDepartmentServices } from './academicDepartment.service';
import { Request, Response } from "express"
import { catchAsynce } from "../../utils/catchAsynce";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";



const createAcademicDepartment =catchAsynce(async(req:Request,res:Response)=>{


    const result  = await AcademicDepartmentServices.createAcademicdepartmentIntoDB(req.body) 

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'Academic department is created successfully' ,
        data:result
    })

})

  const getAllAcademicDepartments =catchAsynce(async(req:Request,res:Response)=>{
     
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'All  academic department is found' ,
        data:result
    })


  })


  const getSingleAcademicDepartment = catchAsynce(async(req:Request , res:Response)=>{
  
    const {departmentId} =req.params 

    const result = await AcademicDepartmentServices. getSingleAcademicDepartmentFromDB(departmentId)

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'single academic department is found successfully' ,
        data:result 
    })



  })


  const udapteAcademicDepartment = catchAsynce(async(req:Request , res:Response)=>{
  
    const {departmentId} =req.params 

    const result = await AcademicDepartmentServices.updateAcademicDepartmentFromDB(departmentId,req.body)

   

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'academic department is updated successfully' ,
        data:result 
    })



  })




export const AcademicDepartmentControllers = {
  createAcademicDepartment ,
  getAllAcademicDepartments ,
   getSingleAcademicDepartment ,
  udapteAcademicDepartment
}