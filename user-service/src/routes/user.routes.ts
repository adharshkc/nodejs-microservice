import app, { Request, Response } from "express";
import { getUser, loginUser, registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  createUserSchema,
  loginUserSchema,
  userIdParam,
} from "../validations/user.validation";

const router = app.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from micro service" }).status(200);
});
router.post("/login", validate(loginUserSchema), loginUser);

router.post("/register", validate(createUserSchema), registerUser);

router.get("/users/:id?", validate(userIdParam), getUser);
export default router;
