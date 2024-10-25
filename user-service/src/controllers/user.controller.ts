

// const loginUser = async function(req:Request, res:Response){
//     const {email, password} = req.body;


import {  Request, Response } from "express"
import {createUser} from "../../prisma/helpers/user"
    
    
// }

export const registerUser = async function (req:Request, res:Response) {
    try {
        const {name, email} = req.body
        const result = await createUser({name, email})
        res.status(201).json({success:true, result})
    } catch (error:any) {
        res.status(500).json({error:error})
    }
}