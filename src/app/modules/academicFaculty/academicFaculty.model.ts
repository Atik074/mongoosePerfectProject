import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";




const accademicFacultySchema = new  Schema<TAcademicFaculty>({

    name:{
        type:String ,
        required:true ,
        unique:true
    }
} ,
{
    timestamps:true
}


)


export const AcademicFaculty = model<TAcademicFaculty>('academicFaculty' ,accademicFacultySchema)

