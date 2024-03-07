import { db } from "./client";

export async function searchTeacher(id:string){
    try{
      
      
      const searchedlead = await db.teacher.findUnique({
       where:{
          id
       }
  
      })
      if(searchedlead){
      return searchedlead;
      }
      return null
    }catch(e){
      console.log("search lead error",e)
    }
  }