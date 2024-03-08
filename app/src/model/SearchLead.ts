import { db } from "./client"


export async function search(email:string){
  try{
    
    
    const searchedlead = await db.leads.findMany({
     where:{
        email
     }

    })
 
    return searchedlead;

  }catch(e){
    console.log("search lead error",e)
  } 
}