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


export const AccademicSemesterServices= {
 createAccademicSemesterIntoDB

}