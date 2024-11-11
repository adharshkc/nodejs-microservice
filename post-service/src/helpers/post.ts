import post from "../models/post.model"

export const addPost = async function(name:string, userId:string){
    try {
        const data = await post.create({
            title:name,
            createdBy:{
                id:userId
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const findPost = async function(id:string){
    try {
        const data = await post.findById(id)
        console.log(id)
        return data
    } catch (error) {
        console.log(error)
    }
}