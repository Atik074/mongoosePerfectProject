import { AcademicFacultyControllers } from './academicFaculty.controller';
import express from 'express'
import validatedRequest from '../../utils/validatedRequest'
import { AcademicFacultyValidation } from './academicFaculty.validation'


const router = express.Router()

 router.post('/create-academic-faculty' , validatedRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
 ) , AcademicFacultyControllers.createAcademicFaculty)


 router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)

//today work

 router.patch('/:facultyId' , validatedRequest(
   AcademicFacultyValidation.updateAcademicFacultyValidationSchema
) , AcademicFacultyControllers.udapteAcademicFaculty)

router.get('/' , AcademicFacultyControllers.getAllAcademicFaculties)


export const AcademicfacultyRoutes= router ;