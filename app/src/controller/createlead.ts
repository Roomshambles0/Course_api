import { Request,Response } from "express"
import { createleadinput } from "../zod_schema/leadInput";
import { db } from "../model/client";
import { createlead } from "../model/CreateLead";



export const Createlead = async(req:Request,res:Response)=>{
try{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createleadinput.safeParse(body);
    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})

    const {email,courseId,name,userId,phoneno,LinkedIn} = body
    const islearner = await db.learner.findUnique({
        where:{
            email,
            name
        }
    })

    if(!islearner) return res.status(400).json({message:"learner does not present"})

    const isleadpresent = await db.leads.findMany({
       where:{
        userId,
        courseId,
        email

       }
    }) 
     
    if(isleadpresent[0]) return res.json({message:"already applied for course"})

    const data = await createlead(courseId,userId,phoneno,LinkedIn,email,name)
    if(!data) return res.status(400).json({message:"data does not exists"})
     
    return res.status(200).json({message:"Lead created successfully",data})
   }catch(e){

    console.log("create lead error: ",e)
    return res.status(500).json({message:"Internal server error"})

   }

}