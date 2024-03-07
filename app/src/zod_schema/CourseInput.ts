

import  { z } from "zod";


export const createcourseinput = z.object({
   title:z.string(),
   teacherId:z.string(),
   maxseats:z.number(),   
   startdate:z.string(),
   published:z.boolean()
})


type createcourtype = z.infer<typeof createcourseinput>;