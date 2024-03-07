import { Request,Response } from "express"
import { updatecourseinput } from "../zod_schema/updatecourseinput"
import { updatecourses } from "../services/upadatecourseservice"
import { searchTeacher } from "../model/searchteacher"


export const updatecourse = async (req:Request,res:Response) =>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = updatecourseinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
     
    const {id} = body
    const {teacherId} = body
    console.log(teacherId)
    const isteacher =  await searchTeacher(teacherId)

      if(!isteacher) return res.status(400).json({message:"Instructor does not present"});
    
    const updatedcourse = await updatecourses(id,body) 
    console.log(updatedcourse)

    if(!updatedcourse) return res.status(400).json({message:"something went wrong"})
     
    return res.status(200).json({message:"course updated successfully",updatedcourse})

}