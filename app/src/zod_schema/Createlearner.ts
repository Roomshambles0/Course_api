import  { z } from "zod";



export const createlearner = z.object({

   name:z.string(),
   email:z.string(),
   password:z.string()

})


type createlearner = z.infer<typeof createlearner>;