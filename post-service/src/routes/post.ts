import app from "express";
import { createPost, getPost } from "../controllers/post.controller";

const router = app.Router();

router.get("/", (req, res) => {res.send("Hello from Posts")});
router.post("/", createPost);
router.get("/:id", getPost);

export default router;
