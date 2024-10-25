import app, { Response } from 'express'
import { registerUser } from '../controllers/user.controller'

const router = app.Router()

router.get('/', (res:Response)=>{res.send("hello")})
router.post('/login')
router.post('/register', registerUser)

export default router