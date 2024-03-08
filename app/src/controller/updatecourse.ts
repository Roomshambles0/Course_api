import { Request,Response } from "express"
import { updatecourseinput } from "../zod_schema/updatecourseinput"
import { Updatecourse } from "../model/UpdateCourse" 
import { searchTeacher } from "../model/SearchInstructer"


export const updatecourse = async (req:Request,res:Response) =>{
try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = updatecourseinput.safeParse(body);
    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
     


    const {id} = body
    const {teacherId} = body
    


    const isteacher =  await searchTeacher(teacherId)
    if(!isteacher) return res.status(400).json({message:"Instructor does not present"});
    


    const data =  await Updatecourse(id,body) 
    console.log(data)



    if(!data) return res.status(400).json({message:"course does not exists"})
     


    return res.status(200).json({message:"course updated successfully",data})
}catch(e){

  console.log(" update course error: ",e)
  return res.status(500).json({message:"Internal server error"})

}

}