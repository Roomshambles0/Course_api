import { Request,Response } from "express"
import { createinstructerinput } from "../zod_schema/CreateInstructer"
import { createteacher } from "../model/CreateTeacher"


export const instructer = async (req:Request,res:Response) =>{
try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = createinstructerinput.safeParse(body);
    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
    
   
    const {
        email,
        name, 
        password,          
          } = body
         
      
        const data = await createteacher(name,email,password)
      

    if(!data) return res.status(400).json({message:"email is present please send another email"})
     
    return res.status(200).json({message:"instructor created successful",data})

        }catch(e){
            
            console.log("instructer controller error: ",e)
            return res.status(500).json({message:"Internal server error"})

        }

}