import express from 'express'
import { AccademicSemesterControllers } from './accademicSemester.controller';
import validatedRequest from '../../utils/validatedRequest';
import { AccademicSemesterValid } from './accademicSemesterValidation';
import { updateAccademicSemesterValid } from './updateAccademicvalidSchema';


const router = express.Router() 

router.post('/create-academic-semester',validatedRequest(AccademicSemesterValid.accademicSemesterValidationShcema) , AccademicSemesterControllers.createAccademicSemester)

router.get('/' , AccademicSemesterControllers.getAccademicSemester)

router.get('/:semesterId' , AccademicSemesterControllers.getSingleAccademicSemester)

router.patch('/:semesterId' ,validatedRequest(updateAccademicSemesterValid.updateAccademicValidationSchema) , AccademicSemesterControllers.updateAccademicSemester)


export const AccademicSemesterRoutes = router ;