import express from 'express'
const router = express.Router();
import { registerUser, loginUser } from '../controllers/user'

router.post('/register', registerUser)
router.post('/login', loginUser)

export default router