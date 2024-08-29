import express from 'express'
import validatedRequest from '../../utils/validatedRequest'
import { AcademicDepartmentValidation } from './academicDepartment.validation'
import { AcademicDepartmentControllers } from './academicDepartment.controller';


const router = express.Router()

 router.post('/create-academic-department' , validatedRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
 ) , AcademicDepartmentControllers.createAcademicDepartment)


 router.get('/:departmentId', AcademicDepartmentControllers.getSingleAcademicDepartment)


 router.patch('/:departmentId' , validatedRequest(
   AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
) , AcademicDepartmentControllers.udapteAcademicDepartment)

router.get('/' , AcademicDepartmentControllers.getAllAcademicDepartments)


export const AcademicDepartmentRoutes= router ;