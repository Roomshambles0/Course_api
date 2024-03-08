import { leadcomment } from "../zod_schema/Leadcomment";
import { db } from "./client";



export async function CreateComment(data:leadcomment){

    const {id,comment} = data

   const senddata = {
    comment:comment
   }
    const createcomment = await db.leads.update({
        where:{
           id
        },
        data:{
            ...senddata
        }
       })

       return createcomment;
}