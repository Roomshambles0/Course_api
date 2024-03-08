import { Request,Response } from "express"
import { createlearner } from "../zod_schema/Createlearner"
import { learner } from "../model/CreateLearner" 


export const Createlearner = async (req:Request,res:Response) =>{
try{
    
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createlearner.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
    const {
        email,
        name, 
        password,          
          } = body
         
      
          const data = await learner(name,email,password)

    if(!data) return res.status(400).json({message:"data does not present"})
     
    return res.status(200).json({message:"learner created successful",data})
}catch(e){

    console.log("Create course route error: ",e)
    return res.status(500).json({message:"Internal server error"})
}
}