import  { z } from "zod";


export const updatecourseinput = z.object({
   id:z.string(),
   title:z.string().optional(),
   teacherId:z.string(),
   maxseats:z.number().optional(),   
   startdate:z.string().optional(),
   published:z.boolean().optional()
})


export type updatecourseinput = z.infer<typeof updatecourseinput>;