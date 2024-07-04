import { Student } from "./student.interface";
import { StudentModel } from "./student.model";


 const createStudentIntoDB = async(studentData:Student)=>{
  //  const result =  await StudentModel.create(student)
  //  return result ; // builtin Static method in mongodb
 
  const student = new StudentModel(studentData)
    if(await StudentModel.isUserExistOnDB(studentData.id)){
      throw new Error('user already exist on database')
    }
  // //custom instance 
  // if(await student.isUserExits(studentData.id)){
  //   throw new Error("user already exists")
  // }

   const result = await student.save()
     return result ; // builtin instance method
}

 const getAllStudentsFromDB =async()=>{
   
  const result = await StudentModel.find()
  return result ;
 }

 const getSingleStudentFromDB =async(id:string)=>{
  // const result = await StudentModel.findOne({id})
  const result =await StudentModel.aggregate([
    {$match:{id:id}}
  ])
  return result ;
 }

 //delete student 

 const deleteStudentfromDB = async(id:string)=>{

  const result = await StudentModel.updateOne({id} , {isDeleted:true})
  return result ;

 }

export const StudentServices ={
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB ,
    deleteStudentfromDB 
}