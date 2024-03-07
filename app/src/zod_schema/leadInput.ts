import  { z } from "zod";


export const createleadinput = z.object({

   email:z.string(),
   name:z.string(),
   courseId:z.string(),  
   userId:z.string(),
   phoneno:z.string(),
   LinkedIn:z.string()

})


type createleadinput = z.infer<typeof createleadinput>;