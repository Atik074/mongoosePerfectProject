import { model, Schema } from 'mongoose';
import { TAccademicSemester} from './accademicSemister.interface';

import { AccademicSemesterCode, AccademicSemesterName, Months } from './accademicSemester.constant';


export const accademicSemesterSchema = new Schema(
  {
    name: {
      type: String,
      enum: AccademicSemesterName,
      required: true,
    },
    year: { type:String, required: true },
    code: { type: String, enum: AccademicSemesterCode, required: true },
    startMonth: { type: String, enum: Months },
    endMonth: { type: String, enum: Months },
  },
  {
    timestamps: true,
  },
);


//middleware to cheak data exists 

accademicSemesterSchema.pre('save', async function(next){
  
  const isExistSemester = await AccademicSemester.findOne({
    year:this.year ,
    name:this.name  
  })

  if(isExistSemester){
    throw new Error('semester is already exists')
  }

  next()

})


export const AccademicSemester = model<TAccademicSemester>(
  'accademicSemester',
  accademicSemesterSchema,
);
