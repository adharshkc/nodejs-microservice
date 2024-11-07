import { addPost, findPost } from "../helpers/post";



export class PostService {
  async postCreate(title: string, user:{name:string, id:string}) {
    const result = await addPost(title, user);
    return result
  }

  async postGet(postId:string){
    const result = await findPost(postId)
    return result
  }
}