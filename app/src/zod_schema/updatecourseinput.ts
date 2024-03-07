import  { z } from "zod";


export const updatecourseinput = z.object({
   title:z.string().optional(),
   teacherId:z.string(),
   maxseats:z.number().optional(),   
   startdate:z.date().optional(),
   published:z.boolean().optional()
})


type updatecourseinput = z.infer<typeof updatecourseinput>;