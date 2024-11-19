import express from 'express'
import { allUsers, login, logout, signUp } from '../controller/userController.js'
import secureRoute from '../middleware/secureRoute.js'

const router=express.Router()
router.post("/signup",signUp)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allusers",secureRoute, allUsers)

export default router