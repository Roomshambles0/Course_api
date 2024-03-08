import { Status } from "@prisma/client";
import { db } from "./client"
import { updateleadinput } from "../zod_schema/Leadupdate";

export async function updatelead(data:updateleadinput){
  try{

    const {
      id,
      status
  } = data

  
 let status1;
 if(status == 'accept')
 {
  status1 = Status.ACCEPT
 }
 else if(status == 'reject')
{
  status1 = Status.REJECT
}
else if (status == 'waitlist')
{
  status1 = Status.WAITLIST
}

const senddata = {
 
  status:status1 as Status
}
    const updatedlead = await db.leads.update({
     where:{
        id
     },
     data:{
         ...senddata
     }
    })

    return updatedlead;

  }catch(e){
    console.log("Update lead error",e)
  }
}