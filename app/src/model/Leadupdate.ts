import { leadupdateparams } from "../types/leadupdate";
import { db } from "./client"

export async function updatelead(Id:string,data:leadupdateparams){
  try{
    
    const updatedlead = await db.leads.update({
     where:{
        id:Id
     },
     data:{
         ...data
     }
    })

    return updatedlead;

  }catch(e){
    console.log("Update lead error",e)
  }
}