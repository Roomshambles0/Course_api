import { Request,Response } from "express"
import { createcourseinput } from "../zod_schema/CourseInput"
import { course } from "../model/CreateCourse"


export const createcourse = async (req:Request,res:Response) =>{
try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
     console.log(body)
    const parseddata = createcourseinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
    const {
        teacherId,
        title,
        maxseats,
        startdate,
        published
    } = body
   

    const data = await course(teacherId,title,maxseats,startdate,published)

    if(!data) return res.status(400).json({message:"data does not exist"})
     
    return res.status(200).json({message:"Course created successful",data})
}catch(e){
    console.log("Create course route error: ",e)
    return res.status(500).json({message:"Internal server error"})
}

}