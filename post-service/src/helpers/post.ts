import post from "../models/post.model"

export const addPost = async function(name:string, user:{name:string, id:string}){
    try {
        const data = await post.create({
            title:name,
            createdBy:{
                id:user.id,
                name:user.name
            }
        })
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