
import { z } from "zod";
import { AccademicSemesterCode, AccademicSemesterName, Months } from "./accademicSemester.constant";





const accademicSemesterValidationShcema = z.object({
   
    body:z.object({
        
        name:z.enum([...AccademicSemesterName] as [string , ...string[]]) ,
        year:z.string() ,
        code:z.enum([...AccademicSemesterCode] as [string , ...string[]]) ,
        startMonth:z.enum([...Months] as [string , ...string[]]),
        endMonth:z.enum([...Months] as [string , ...string[]])
    })

})


export const AccademicSemesterValid ={
    accademicSemesterValidationShcema
}