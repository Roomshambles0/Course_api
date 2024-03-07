import { db } from "./client"


export async function createteacher(name:string,email:string,password:string){
  try{
    const teacher = await db.teacher.create({
        data:{
            name,
            email,
            password
        }
    })

    return teacher;

  }catch(e){
    console.log("Create teacher error",e)
  }
}