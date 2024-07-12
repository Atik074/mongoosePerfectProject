import express from 'express'
import { UserControllers } from './user.controller';


const router = express.Router()


import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";


const validatedRequest = (schema:AnyZodObject)=>{

    return async (req:Request,res:Response,next:NextFunction)=>{

        await schema.parseAsync({
            body:req.body

        })

        next()
    }
}

export default validatedRequest ;




  router.post('/create-student', UserControllers.createStudent )

  export const  UserRoutes = router ;