import { Request,Response } from "express"
import { createinstructerinput } from "../zod_schema/CreateInstructer"
import { createinstructer } from "../services/createinstructer"


export const instructercontroller = async (req:Request,res:Response) =>{

    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createinstructerinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
    const instructer = await createinstructer(body) 

    if(!instructer) return res.status(500).json({message:"internal server error"})
     
    return res.status(200).json({message:"instructor created successful",instructer:instructer})

}