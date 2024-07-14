import { TAccademicSemesterCode, TAccademicSemesterName, TAccademicSemesterNameCodeMapper, TMonths } from "./accademicSemister.interface";


export const Months: TMonths[] = [
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
    '03'
    
  ];
  





// for cheaking name and code 
export const accademicSemesterNameCodeMapper :TAccademicSemesterNameCodeMapper ={
    Autumn:'01' ,
    Summer:'02' ,
    'Fall':'03'
}