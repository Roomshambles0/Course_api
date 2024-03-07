import  { z } from "zod";



export const leadsearchinput = z.object({

   email:z.string().email()
})


export type leadsearchinputtype = z.infer<typeof leadsearchinput>;