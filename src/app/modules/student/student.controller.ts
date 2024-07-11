import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


   //get all student from db 
   const getAllStudents = async(req:Request ,res:Response ,next:NextFunction)=>{
      
    try{

      const result = await StudentServices.getAllStudentsFromDB()

      sendResponse(res ,{
       statusCode:httpStatus.OK ,
       success:true ,
       message:'get all students successfully' ,
       data:result 
     })


    }catch(err){

          next(err)
          
    }  
   }

   /// signle student find by their id
   const getSingleStudent = async(req:Request ,res:Response,next:NextFunction)=>{
      
    try{

      const {studentId} = req.params

      const result = await StudentServices.getSingleStudentFromDB(studentId)

    sendResponse(res ,{
      statusCode:httpStatus.OK ,
      success:true ,
      message:'get single student successfully' ,
      data:result 
    })


    }catch(err){

       next(err)

    }
  
      
   }

   //delete student 
     const deleteSingleStudent = async(req:Request ,res:Response,next:NextFunction)=>{
      
    try{

      const {studentId} = req.params

      const result = await StudentServices.deleteStudentfromDB(studentId)

  sendResponse(res ,{
      statusCode:httpStatus.OK ,
      success:true ,
      message:'delete single student successfully ' ,
      data:result 
    })


    }catch(err){
         next(err)

    }   
   }


   export const StudentControllers ={
     getAllStudents ,
     getSingleStudent ,
     deleteSingleStudent
   }