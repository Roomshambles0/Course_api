import { createlead } from "../model/CreateLead"
import { createleadinput } from "../zod_schema/leadInput"


export async function  createLead(data:createleadinput) {
    
    const {courseId,
        userId,
        email,
        name,
        phoneno,
        LinkedIn
    } = data

   

    const lead = await createlead(courseId,userId,phoneno,LinkedIn,email,name)

    if(lead){
    return lead
}
 
}