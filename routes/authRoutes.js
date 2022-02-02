import { login, register, updateUser } from "../controllers/authControllers.js";
import express from "express"
const router = express.Router();
import authenticateUser from "../middleware/auth.js"

router.post("/register", register)
router.post("/login", login)
router.patch("/updateUser", authenticateUser,  updateUser)

export default router;