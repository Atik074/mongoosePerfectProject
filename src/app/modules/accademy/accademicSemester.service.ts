import { accademicSemesterNameCodeMapper } from "./accademicSemester.constant";
import { AccademicSemester } from "./accademicSemester.model"
import { TAccademicSemester } from "./accademicSemister.interface";




const createAccademicSemesterIntoDB =async(payload:TAccademicSemester)=>{
      
    // for cheacking name and code match
    if(accademicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('name and code is not match')
    }
    
    //after cheacking complete send to database

    const result =  await AccademicSemester.create(payload)
        return result ;

}

const getAccademicSemesterFromDB = async()=>{
    const result = await AccademicSemester.find()
    return result ;
}

const getSingleSemesterFromDB = async(semesterId:string)=>{

    const result = await AccademicSemester.findOne({_id:semesterId})
    return result ;

}

const updateAccademicSemesterFromDB = async(semesterId:string , updateField:any)=>{

    
    const result = await AccademicSemester.updateMany({_id:semesterId},{
        year:updateField.year,
        startMonth:updateField.startMonth,
        endMonth:updateField.endMonth,
    })

    return result ;
}


export const AccademicSemesterServices= {
 createAccademicSemesterIntoDB ,
 getAccademicSemesterFromDB ,
  getSingleSemesterFromDB ,
  updateAccademicSemesterFromDB

}