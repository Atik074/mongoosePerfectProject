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
        message:'Academic faculty is created successfully' ,
        data:result
    })

})

  const getAllAcademicDepartments =catchAsynce(async(req:Request,res:Response)=>{
     
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB()

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'All  academic faculty is fouund' ,
        data:result
    })


  })


  const getSingleAcademicDepartment = catchAsynce(async(req:Request , res:Response)=>{
  
    const {facultyId} =req.params 

    const result = await AcademicDepartmentServices. getSingleAcademicDepartmentFromDB(facultyId)

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'single academic faulty is found successfully' ,
        data:result 
    })



  })


  const udapteAcademicDepartment = catchAsynce(async(req:Request , res:Response)=>{
  
    const {facultyId} =req.params 

    const result = await AcademicDepartmentServices.updateAcademicDepartmentFromDB(facultyId,req.body)

   

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'academic faculty is updated successfully' ,
        data:result 
    })



  })




export const AcademicFacultyControllers = {
  createAcademicDepartment ,
  getAllAcademicDepartments ,
   getSingleAcademicDepartment ,
  udapteAcademicDepartment
}