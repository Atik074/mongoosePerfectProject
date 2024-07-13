import express from 'express';
import { UserControllers } from './user.controller';
import createStudentValidationSchema from '../student/student.zodValid';
import validatedRequest from '../../utils/validatedRequest';

const router = express.Router();

router.post(
  '/create-student',
  validatedRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
