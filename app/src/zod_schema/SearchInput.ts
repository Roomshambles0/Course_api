import  { z } from "zod";



export const leadsearch = z.object({

   id:z.string(),
   email:z.string()
})


type createlead = z.infer<typeof leadsearch>;