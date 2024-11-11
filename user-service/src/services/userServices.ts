import { checkUser, createUser, findUser, UserPostAdd } from "../helpers/user";

export class UserServices {
  async userLogin(email: string) {
    const result = await checkUser(email);
    return result;
  }

  async userRegister(name: string, email: string) {
    const result = await createUser({ name, email });
    return result;
  }

  async userGet(userId: string) {
    const result = await findUser(userId);
    return result;
  }

  async addPost(userId:string, {postId, title}:Post){
    const result = await UserPostAdd(userId, {postId, title})
  }

  async subscriberEvent(payload:any) {
    const {event, data} = payload;
    const {userId, post:{postId, title}} = data;
    switch(event){
        case 'ADD_POST':
        this.userGet(userId)
    }
  }
}


export type Post={
  postId:string,
  title:string
}