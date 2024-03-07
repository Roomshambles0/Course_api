import  { z } from "zod";



export const leadsearchinput = z.object({

   id:z.string(),
   email:z.string().email()
})


export type leadsearchinputtype = z.infer<typeof leadsearchinput>;