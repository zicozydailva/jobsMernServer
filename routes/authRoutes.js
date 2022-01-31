import { login, register, updateUser } from "../controllers/authControllers.js";
import express from "express"
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.patch("/updateUser", updateUser)

export default router;