import {PrismaClient} from "@prisma/client"
const prisma = new  PrismaClient()
import {User} from "../../src/types/types"

export const createUser = async function ({name, email}:User){
    try {
        const newUser = await prisma.user.create({
            data:{
                name:name,
                email:email    
            }
        })
        return newUser
    } catch (error) {
        console.log(error)
    }
}

