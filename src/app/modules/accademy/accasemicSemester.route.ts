import express from 'express'
import { AccademicSemesterControllers } from './accademicSemester.controller';
import validatedRequest from '../../utils/validatedRequest';
import { AccademicSemesterValid } from './accademicSemesterValidation';


const router = express.Router() 

router.post('/create-academic-semester',validatedRequest(AccademicSemesterValid.accademicSemesterValidationShcema) , AccademicSemesterControllers.createAccademicSemester)


export const AccademicSemesterRoutes = router ;