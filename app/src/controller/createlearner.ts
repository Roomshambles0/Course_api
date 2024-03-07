import { Request,Response } from "express"
import { createlearner } from "../zod_schema/Createlearner"
import { createLearner } from "../services/createlearnerservice"


export const learnercontroller = async (req:Request,res:Response) =>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createlearner.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
    const learner = await createLearner(body) 

    if(!learner) return res.status(500).json({message:"internal server error"})
     
    return res.status(200).json({message:"instructor created successful",learner:learner})

}