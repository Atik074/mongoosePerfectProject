import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { catchAsynce } from "../../utils/catchAsynce";





  const getAllStudents =catchAsynce(async(req,res,next)=>{
      
      const result = await StudentServices.getAllStudentsFromDB()

      sendResponse(res ,{
       statusCode:httpStatus.OK ,
       success:true ,
       message:'get all students successfully' ,
       data:result 
     })

   })



   //get all student from db 
  //  const getAllStudents:RequestHandler = async(req,res,next)=>{
      
  //   try{

  //     const result = await StudentServices.getAllStudentsFromDB()

  //     sendResponse(res ,{
  //      statusCode:httpStatus.OK ,
  //      success:true ,
  //      message:'get all students successfully' ,
  //      data:result 
  //    })


  //   }catch(err){

  //         next(err)
          
  //   }  
  //  }

   /// signle student find by their id
   
   const getSingleStudent =catchAsynce(async(req,res,next)=>{
      
      const {studentId} = req.params

      const result = await StudentServices.getSingleStudentFromDB(studentId)

    sendResponse(res ,{
      statusCode:httpStatus.OK ,
      success:true ,
      message:'get single student successfully' ,
      data:result 
    })
 
   })

   //delete student 
     const deleteSingleStudent=catchAsynce(async(req ,res,next)=>{
    
        const {studentId} = req.params
        const result = await StudentServices.deleteStudentfromDB(studentId)
  
    sendResponse(res ,{
        statusCode:httpStatus.OK ,
        success:true ,
        message:'delete single student successfully ' ,
        data:result 
      })
    
   })


   export const StudentControllers ={
     getAllStudents ,
     getSingleStudent ,
     deleteSingleStudent
   }