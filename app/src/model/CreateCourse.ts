import { db } from "./client"


export async function createcourse(teacherId:string,title:string,maxseats:number,startdate:Date,published:boolean){
  try{
    const Course = await db.course.create({
        data:{
         teacherId,
         title,
         maxseats,
         startdate,
         published
        }
    })

    return Course;

  }catch(e){
    console.log("Create course error",e)
  }
}