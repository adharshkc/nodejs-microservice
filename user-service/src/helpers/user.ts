import {PrismaClient} from "@prisma/client"
const prisma = new  PrismaClient()
import {User} from "../types/types"
import { Post } from "../services/userServices"
import { set } from "zod"

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

export const checkUser = async function(email:string){
    try {
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const findUser = async function(userId:string){
    try {
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        return user
    } catch (error) {
        console.log(error)
    }
}

export const UserPostAdd = async function(userId:string, post:{postId:string, title:string}){
    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: {
              posts: {
                set: {
                  id: post.postId,
                  title: post.title,
                },
              },
            },
            include: {
              posts: true,
            },
          });
          return user
    } catch (error) {
        console.log(error)
    }
}