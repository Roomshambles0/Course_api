import { updatecourse } from "../model/UpdateCourse"
import { updatecourseinput } from "../zod_schema/updatecourseinput"




export async function  updatecourses(id:string,data:updatecourseinput) {

const updatedcourse = await updatecourse(id,data)
if(updatedcourse){
    return updatecourse
}
 
}