import { AccademicSemester } from './../accademy/accademicSemester.model';
import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // role
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  userData.password = password || (config.default_password as string);

  //set student role
     userData.role = 'student';


//find admission semester info
    const admissionSemester = await AccademicSemester.findById(payload.admissionSemester)

  //set auto generate id
  userData.id =await generateStudentId(admissionSemester);

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
  }

    const newStudent = await StudentModel.create(payload)
     return newStudent ;
      
};

export const UserServices = {
  createStudentIntoDB,
};
