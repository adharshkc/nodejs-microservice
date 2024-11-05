import { Request, Response } from "express";
import { addPost, findPost } from "../helpers/post";



export const createProduct = async function(req:Request, res:Response){
    try {
        const {name, price} = req.body;
        const result = await addPost(name, price)
        res.status(201).json({result})
    } catch (error) {
        res.status(500).json({error:error})
    }
}
export const getProduct = async function(req:Request, res:Response){
    try {
        const productId = req.params.id;
        const result = await findPost(productId, )
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        res.status(500).json({error:error})
    }
}


