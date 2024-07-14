import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { studentRoutes } from '../modules/student/student.route'
import { AccademicSemesterRoutes } from '../modules/accademy/accasemicSemester.route'

const router = express.Router()

const moduleRoutes =[

    {
        path:'/users' ,
        route:UserRoutes
    } ,
    {
        path:'/students',
        route:studentRoutes
    } ,
    {
        path:'/academic-semesters',
        route:AccademicSemesterRoutes
    }

]

moduleRoutes.forEach(route =>router.use(route.path , route.route))

export default router ;