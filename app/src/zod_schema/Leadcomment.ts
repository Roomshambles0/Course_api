import  { z } from "zod";




export const leadcomment = z.object({

   id:z.string(),
   comment:z.string(),

})


type leadcomment = z.infer<typeof leadcomment>;