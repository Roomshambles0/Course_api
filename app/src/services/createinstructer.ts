import { createteacher } from "../model/CreateTeacher"
import { createinstructer } from "../zod_schema/CreateInstructer"

export async function  createinstructer(data:createinstructer) {
    
    const {
  email,
  name, 
  password,          
    } = data
   

    const teacher = await createteacher(name,email,password)

    if(teacher){
    return teacher
}
 
}