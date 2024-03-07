import  { z } from "zod";




export const leadcommentinput = z.object({

   id:z.string(),
   comment:z.string(),

})


export type leadcomment = z.infer<typeof leadcommentinput>;