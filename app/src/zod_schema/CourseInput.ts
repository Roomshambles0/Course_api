

import  { z } from "zod";


export const createcourseinput = z.object({
   title:z.string(),
   teacherId:z.string(),
   maxseats:z.number(),   
   startdate:z.date(),
   published:z.boolean()
})


type createcourseinput = z.infer<typeof createcourseinput>;