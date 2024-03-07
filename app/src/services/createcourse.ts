import { createcourse } from "../model/CreateCourse";
import { data } from "../types/createcourseparams";



export async function  createcourses(data:data) {
    
    const {
        teacherId,
        title,
        maxseats,
        startdate,
        published
    } = data
   

    const course = await createcourse(teacherId,title,maxseats,startdate,published)
if(course){
    return course
}
 
}