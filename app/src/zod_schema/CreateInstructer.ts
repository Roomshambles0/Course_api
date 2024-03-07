import  { z } from "zod";



export const createinstructer = z.object({

   name:z.string(),
   email:z.string(),
   password:z.string()

})


type createinstructer = z.infer<typeof createinstructer>;