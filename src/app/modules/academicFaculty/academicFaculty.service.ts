import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model"

const createAcademicFacultyIntoDB =async(payload:TAcademicFaculty)=>{

    const result = await AcademicFaculty.create(payload)
    return result ;
}

const getAllAcademicFacultiesFormDB =async()=>{

    const result = await AcademicFaculty.find()
    return result ;
}

const getSingleAcademicFacultFromDB =async(id:string)=>{
       
    const result = await AcademicFaculty.findById(id)
    return result ;
}


const updateAcademicFacultyfromDB =async(id:string, payload:Partial<TAcademicFaculty>)=>{

    const  result = await AcademicFaculty.findOneAndUpdate({_id:id},
        payload , {
            new:true
        })
       
      return result ;  


}


export const AcademicFacultyServices = {
    createAcademicFacultyIntoDB ,
    getAllAcademicFacultiesFormDB ,
    getSingleAcademicFacultFromDB ,
    updateAcademicFacultyfromDB
}