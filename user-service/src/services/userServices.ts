import { checkUser, createUser, findUser } from "../helpers/user";

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

  async subscriberEvent(payload:any) {
    const {event, data} = payload;
    const {postId} = data
    // switch(event){
    //     case ''
    // }
  }
}
