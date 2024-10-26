import app, { Request, Response } from 'express'
import { registerUser } from '../controllers/user.controller'
import { validate } from '../middlewares/validate.middleware'
import { createUserSchema } from '../validations/user.validation'

const router = app.Router()

router.get('/', (req:Request, res:Response)=>{
    res.send("hello from micro service")
}
)
router.post('/login')


router.post('/register', validate(createUserSchema), registerUser)

export default router