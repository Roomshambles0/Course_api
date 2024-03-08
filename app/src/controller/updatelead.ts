import { Request,Response } from "express"
import { updateleadinput } from "../zod_schema/Leadupdate";
import { updatelead } from "../model/UpdateLead";

export const leadupdate = async (req:Request,res:Response) =>{
try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
     
    const parseddata = updateleadinput.safeParse(body);
    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
     


    
    const data = await updatelead(body) 

    if(!data) return res.status(400).json({message:"data does not present"})
     
    return res.status(200).json({message:"Lead update successful",data})
}catch(e){
    console.log("update lead error",e)
    return res.status(500).json({message:"internal server error"})
}
}