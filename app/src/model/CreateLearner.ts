import { db } from "./client"


export async function learner(name:string,email:string,password:string){
  try{
    const learner = await db.learner.create({
        data:{
            name,
            email,
            password
        }
    })

    return learner;

  }catch(e){
    console.log("Create learner error",e)
  }
}