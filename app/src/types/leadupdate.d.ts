import { Status } from "@prisma/client";

export interface leadupdateparams{
    status?:Status,
    comment?:string
    
}