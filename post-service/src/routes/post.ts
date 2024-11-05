import app from "express"
import { createProduct, getProduct } from "../controllers/post.controller"

const router = app.Router()


router.post("/", createProduct)
router.get("/:id", getProduct)


export default router