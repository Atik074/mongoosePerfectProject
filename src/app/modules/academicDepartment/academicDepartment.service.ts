import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


const createAcademicdepartmentIntoDB =async(payload:TAcademicDepartment)=>{

    const result = await AcademicDepartment.create(payload)
    return result ;
}

const getAllAcademicDepartmentFromDB =async()=>{

    const result = await AcademicDepartment.find()
    return result ;
}

const getSingleAcademicDepartmentFromDB =async(id:string)=>{
       
    const result = await AcademicDepartment.findById(id)
    return result ;
}


const updateAcademicDepartmentFromDB =async(id:string, payload:Partial<TAcademicDepartment>)=>{

    const  result = await AcademicDepartment.findOneAndUpdate({_id:id},
        payload , {
            new:true
        })
       
      return result ;  


}


export const AcademicDepartmentServices = {
    createAcademicdepartmentIntoDB ,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB ,
    updateAcademicDepartmentFromDB 
}