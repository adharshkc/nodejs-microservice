import app, { Request, Response } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { createUserSchema } from "../validations/user.validation";

const router = app.Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: 'Hello from micro service' }).status(200)
});
router.post("/login", loginUser);

router.post("/register", validate(createUserSchema), registerUser);

export default router;
