import { Request,Response } from "express"
import { searchTeacher } from "../model/searchteacher";
import { leadsearchinput } from "../zod_schema/SearchInput";
import { search } from "../model/LeadSearch";

export const leadsearch = async (req:Request,res:Response) =>{

    try{
    const body = req.body 
    if (!body) return res.status(400).json({message:"You can't sent emply request"})
    
    const parseddata = leadsearchinput.safeParse(body);

    if(!parseddata.success) return res.status(400).json({message:"Please send correct input"})
     
    
    const {email} = body

    const lead = await search(email)

    if(!lead) return res.status(400).json({message:"lead does not exist"})

    return res.status(200).json({lead:lead})
    }catch(e){
        console.log("leadsearch controller error",e)
        return res.status(500).json({message:"internal server error"})
    }

}