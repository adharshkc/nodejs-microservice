import { Request, Response } from "express";
import {registerUser, loginUser} from "../controllers/user.controller"
import { createUser, checkUser } from "../helpers/user";

jest.mock("../helpers/user",()=>({
    createUser:jest.fn(),
    checkUser:jest.fn()
}))

describe('user controller',()=>{
    let req: Partial<Request>;
    let res:Partial<Response>;
    let statusMock: jest.Mock
    let jsonMock: jest.Mock;

    beforeEach(()=>{
        req={
            body:{}
        }
        jsonMock=jest.fn()
        statusMock=jest.fn(()=>({json:jsonMock})) as jest.Mock

        res={
            status:statusMock
        }
    })
    describe('register user',()=>{
        it("should create a user and return 201 status on success",async()=>{
            req.body = {name: "John Doe", email:"johnDoe@gmail.com"}
            const mockUser = {id:1, name:"John Doe",email: "johnDoe@gmail.com" };
            (createUser as jest.Mock).mockResolvedValue(mockUser)
            await registerUser(req as Request, res as Response);

            expect(createUser).toHaveBeenCalledWith(req.body)
            expect(statusMock).toHaveBeenCalledWith(201)
            expect(jsonMock).toHaveBeenCalledWith({success:true, result:mockUser})
        })

        // it("should return status 500 and error message on failure",async()=>{
        //     req.body = { name: "John Doe", email: "john@example.com" };
        //     const mockError = new Error("user creation failed");
        //     (createUser as jest.Mock).mockResolvedValue(mockError)

        //     await registerUser(req as Request, res as Response);

        //     expect(statusMock).toHaveBeenCalledWith(500)
        //     expect(jsonMock).toHaveBeenCalledWith({error:mockError})
        // })
    })

    describe('login user',()=>{
        it("should login a user and return 200 on success", async()=>{
            req.body = {email:"john@gmail.com"}
            const mockUser = {id:1, name:"John Doe", email:"john@gmail.com"};
            (checkUser as jest.Mock).mockResolvedValue(mockUser)
            await loginUser(req as Request, res as Response);

            expect(checkUser).toHaveBeenCalledWith("john@gmail.com")
            expect(statusMock).toHaveBeenCalledWith(200)
            expect(jsonMock).toHaveBeenCalledWith({success:true, result:mockUser})
        })
        it("should find a user and return 200 status on success", async () => {
            req.body = { email: "john@gmail.com" };
      
            const mockUser = { id: 1, name: "John Doe", email: "john@gmail.com" };
            (checkUser as jest.Mock).mockResolvedValue(mockUser);
      
            await loginUser(req as Request, res as Response);
      
            expect(checkUser).toHaveBeenCalledWith("john@gmail.com");
            expect(statusMock).toHaveBeenCalledWith(200);
            expect(jsonMock).toHaveBeenCalledWith({ success: true, result: mockUser });
          });
      
    })
})
