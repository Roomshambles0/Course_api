import { Request,Response } from "express"
import { leadcommentinput } from "../zod_schema/Leadcomment";
import { CreateComment } from "../model/AddComment";

export const comment = async (req:Request,res:Response) =>{

    try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = leadcommentinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
  
    const commented = await CreateComment(body)

    if(!commented) return res.status(400).json({message:"not commented"})

    return res.status(200).json({message:"comment created successful",commented})
    }catch(e){
        console.log("leadsearch controller error",e)
        return res.status(500).json({message:"internal server error"})
    }

}