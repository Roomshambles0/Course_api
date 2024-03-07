import  { z } from "zod";



export const createinstructerinput = z.object({

   name:z.string(),
   email:z.string().email(),
   password:z.string()

})


export type createinstructer = z.infer<typeof createinstructerinput>;