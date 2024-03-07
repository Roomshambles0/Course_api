import { string } from "zod";
import { db } from "./client"


export async function createlead(courseId:string,userId:string,phoneno:string,LinkedIn:string,email:string,name:string){
  try{
    const Lead = await db.leads.create({
        data:{
          email,
          name,
          courseId,
          userId,
          phoneno,
          LinkedIn
        }
    })

    return Lead;

  }catch(e){
    console.log("Create lead error",e)
  }
}