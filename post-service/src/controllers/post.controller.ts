import { Request, Response } from "express";
import { addPost, findPost } from "../helpers/post";
import axios from "axios";
import { PostService } from "../services/postService";


const postService = new PostService()


export const createPost = async function(req:Request, res:Response){
    try {
        const {title, createdBy} = req.body;
        const result = await postService.postCreate(title, createdBy)
        res.status(201).json({result})
    } catch (error) {
        res.status(500).json({error:error})
    }
}
export const getPost = async function(req:Request, res:Response){
    try {
        const PostId = req.params.id;
        const result = await postService.postGet(PostId, )
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        res.status(500).json({error:error})
    }
}


