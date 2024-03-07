import { updatelead } from "../model/Leadupdate"
import { searchTeacher } from "../model/searchteacher"
import { updateleadinput } from "../zod_schema/Leadupdate"

import { Status } from "@prisma/client"

export async function  updateLead(data:updateleadinput) {
    
    const {
        id,
        status
    } = data
   const teacher = await searchTeacher(id)
   if(!teacher) return null
    
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

 const updatedlead = await updatelead(id,senddata)

 if(updatedlead){
    return updateLead
 }else{
    return null
 }
}