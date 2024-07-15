
import { z } from "zod";
import { AccademicSemesterCode, AccademicSemesterName, Months } from "./accademicSemester.constant";





const updateAccademicValidationSchema= z.object({
   
    body:z.object({
        
        name:z.enum([...AccademicSemesterName] as [string , ...string[]]).optional() ,
        year:z.string().optional() ,
        code:z.enum([...AccademicSemesterCode] as [string , ...string[]]).optional() ,
        startMonth:z.enum([...Months] as [string , ...string[]]).optional(),
        endMonth:z.enum([...Months] as [string , ...string[]]).optional()
    })

})


export const updateAccademicSemesterValid={
    updateAccademicValidationSchema
}