import { db } from "./client"


export async function search(id:string){
  try{
    
    
    const searchedlead = await db.leads.findUnique({
     where:{
        id
     }

    })

    return searchedlead;

  }catch(e){
    console.log("search lead error",e)
  } 
}