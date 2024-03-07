import { updatedata } from "../types/updatedata";
import { db } from "./client"


export async function updatecourse(Id:string,data:updatedata){
  try{
    
    
    const updatedCourse = await db.course.update({
     where:{
        id:Id
     },
     data:{
         ...data
     }
    })

    return updatedCourse;

  }catch(e){
    console.log("Update course error",e)
  }
}