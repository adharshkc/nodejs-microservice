import app from 'express'

const router = app.Router()

router.get('/')
router.post('/login')
router.post('/register')

export default router