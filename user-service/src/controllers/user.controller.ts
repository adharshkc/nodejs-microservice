import { Request, Response } from "express";
import { checkUser, createUser, findUser } from "../helpers/user";
import { UserServices } from "../services/userServices";

const userService = new UserServices();

export const registerUser = async function (req: Request, res: Response) {
  try {
    const { name, email } = req.body;
    const result = await userService.userRegister(name, email);
    res.status(201).json({ success: true, result });
  } catch (error: any) {
    res.status(500).json({ error: error });
  }
};

export const loginUser = async function (req: Request, res: Response) {
  try {
    const { email } = req.body;
    const result = await userService.userLogin(email);
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getUser = async function (req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const result = await userService.userGet(userId);
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
