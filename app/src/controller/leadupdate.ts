import { Request,Response } from "express"
import { updateleadinput } from "../zod_schema/Leadupdate";
import { searchTeacher } from "../model/searchteacher";
import { updateLead } from "../services/updateleadservice";

export const leadupdate = async (req:Request,res:Response) =>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = updateleadinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
     
    const {id} = body
    const {teacheId} = body
    const isteacher =  await searchTeacher(teacheId)

      if(!isteacher) return res.status(400).json({message:"Instructor does not present"});
    
    const updatedlead = await updateLead(body) 
    

    if(!updatedlead) return res.status(400).json({message:"something went wrong"})
     
    return res.status(200).json({message:"instructor created successful",updatedlead})

}