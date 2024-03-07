import  { z } from "zod";


    enum Status {
      applied =  'applied',
      accept  = 'accept',
      reject  = 'reject',
      waitlist = 'waitlist'
      }


export const updateleadinput = z.object({

   id:z.string(),
   status:z.nativeEnum(Status),

})


type updateleadinput = z.infer<typeof updateleadinput>;