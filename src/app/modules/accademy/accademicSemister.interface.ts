
export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAccademicSemesterName = 'Autumn' | 'Summer' | 'Fall'
export type TAccademicSemesterCode = '01' | '02' | '03' 


export type  TAccademicSemester={
    name:TAccademicSemesterName,
    code:TAccademicSemesterCode,
    year:Date ,
    startMonth:TMonths ,
    endMonth:TMonths
}