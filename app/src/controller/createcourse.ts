import { Request,Response } from "express"
import { createcourseinput } from "../zod_schema/CourseInput"
import { createcourses } from "../services/createcourse"


export const createcourse = async (req:Request,res:Response) =>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createcourseinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
    const createcourse = await createcourses(body) 

    if(!createcourse) return res.status(500).json({message:"internal server error"})
     
    return res.status(200).json({message:"Course created successful",createcourse:createcourse})

}