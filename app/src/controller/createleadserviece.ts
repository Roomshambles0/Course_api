import { Request,Response } from "express"
import { createleadinput } from "../zod_schema/leadInput";
import { db } from "../model/client";
import { createLead } from "../services/createleadservice";



export const createlead = async(req:Request,res:Response)=>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createleadinput.safeParse(body);
    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})

    const {email} = body
    const {courseId} = body
    const {userId} = body

    const islearner = await db.learner.findUnique({
        where:{
            email
        }
    })

    if(!islearner) return res.status(400).json({message:"learner does not present"})

    const isleadpresent = await db.leads.findMany({
       where:{
        userId,
        courseId
        
       }
    }) 
      
    if(isleadpresent) return res.json({message:"already applied for course"})

    const createlead = await createLead(body) 
    
     
    if(!createlead) return res.status(500).json({message:"internal server error"})
     
    return res.status(200).json({message:"Course created successful",createlead})
       

}