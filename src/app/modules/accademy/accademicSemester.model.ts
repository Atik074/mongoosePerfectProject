import { model, Schema } from 'mongoose';
import {
  TAccademicSemester,
  TAccademicSemesterCode,
  TAccademicSemesterName,
  TMonths,
} from './accademicSemister.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AccademicSemesterName: TAccademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const AccademicSemesterCode: TAccademicSemesterCode[] = [
  '01',
  '02',
  '03',
];

export const accademicSemesterSchema = new Schema(
  {
    name: {
      type: String,
      enum: AccademicSemesterName,
      required: true,
    },
    year: { type: Date, required: true },
    code: { type: String, enum: AccademicSemesterCode, required: true },
    startMonth: { type: String, enum: Months },
    endMonth: { type: String, enum: Months },
  },
  {
    timestamps: true,
  },
);

export const AccademicSemester = model<TAccademicSemester>(
  'accademicSemester',
  accademicSemesterSchema,
);
