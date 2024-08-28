import { Request, Response } from "express"
import { catchAsynce } from "../../utils/catchAsynce";
import { AcademicFacultyServices } from "./academicFaculty.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createAcademicFaculty =catchAsynce(async(req:Request,res:Response)=>{


    const result  = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body) 

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'Academic faculty is created successfully' ,
        data:result
    })

})

  const getAllAcademicFaculties =catchAsynce(async(req:Request,res:Response)=>{
     
    const result = await AcademicFacultyServices.getAllAcademicFacultiesFormDB()

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'All  academic faculty is fouund' ,
        data:result
    })


  })


  const getSingleAcademicFaculty = catchAsynce(async(req:Request , res:Response)=>{
  
    const {facultyId} =req.params 

    const result = await AcademicFacultyServices.getSingleAcademicFacultFromDB(facultyId)

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'single academic faulty is found successfully' ,
        data:result 
    })



  })


  const udapteAcademicFaculty = catchAsynce(async(req:Request , res:Response)=>{
  
    const {facultyId} =req.params 

    const result = await AcademicFacultyServices.updateAcademicFacultyfromDB(facultyId,req.body)

   

    sendResponse(res , {
        statusCode:httpStatus.OK ,
        success:true ,
        message:'academic faculty is updated successfully' ,
        data:result 
    })



  })




export const AcademicFacultyControllers = {
    createAcademicFaculty ,
    getAllAcademicFaculties ,
    getSingleAcademicFaculty ,
    udapteAcademicFaculty
}