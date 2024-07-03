import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidateSchema from "./student.JoiValidation";



const createStudent =async(req:Request,res:Response)=>{
   
    try{
        
    const {student:studentData} = req.body

    // joi validate 
   const{error} =studentValidateSchema.validate(studentData)
   //send into database
   const result = await StudentServices.createStudentIntoDB(studentData)


   
   if(error){
    res.status(500).json({
      status:'false',
      message:'something is wrong',
      error:error.details
})
   }



    res.status(200).json({
        status:'success',
        message:'student is created successfully',
        data:result
    })

    }catch(err){console.log(err)}


   }

   //get all student from db 
   const getAllStudents = async(req:Request ,res:Response)=>{
      
    try{

      const result = await StudentServices.getAllStudentsFromDB()

      res.status(200).json({
         status:'success',
         message:'get all student from db ',
        data:result
  })
    }catch(err){
       console.log(err);
    }
  
      
   }

   /// signle student find by their id 

   const getSingleStudent = async(req:Request ,res:Response)=>{
      
    try{



      const {studentId} = req.params

      const result = await StudentServices.getSingleStudentFromDB(studentId)

      res.status(200).json({
         status:'success',
         message:'get single student from db ',
        data:result
  })
    }catch(err){
       console.log(err);
    }
  
      
   }




   export const StudentControllers ={
     createStudent ,
     getAllStudents ,
     getSingleStudent
   }