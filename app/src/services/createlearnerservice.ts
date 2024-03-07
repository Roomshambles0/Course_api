import { createlearner } from "../model/CreateLearner"
import { createlearnerinput } from "../zod_schema/Createlearner"

export async function  createLearner(data:createlearnerinput) {
    
    const {
  email,
  name, 
  password,          
    } = data
   

    const learner = await createlearner(name,email,password)

    if(learner){
    return learner
}
 
}