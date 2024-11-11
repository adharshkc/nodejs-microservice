import { addPost, findPost } from "../helpers/post";



export class PostService {
  async postCreate(title: string,userId:string) {
    const result = await addPost(title, userId);

    return result
  }

  async postGet(postId:string){
    const result = await findPost(postId)
    return result
  }
}