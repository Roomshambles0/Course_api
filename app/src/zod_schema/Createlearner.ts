import  { z } from "zod";



export const createlearner = z.object({

   name:z.string(),
   email:z.string().email(),
   password:z.string()

})


export type createlearnerinput = z.infer<typeof createlearner>;