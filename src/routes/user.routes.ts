import { Router } from "express";
import userListController from "../controllers/user/userList.controller";
import userCreateController from "../controllers/user/userCreate.controller";
import verifyEmailMiddleware from "../middleware/verifyEmail.middleware";
import loginController from "../controllers/sessions/login.controller";
import verifyAuthToken from "../middleware/verifyAuthToken.middleware";
import deleteUserController from "../controllers/user/deleteUser.controller";
const userRoutes = Router()


userRoutes.get('/', verifyAuthToken, userListController)
userRoutes.post('/', verifyEmailMiddleware, userCreateController)
userRoutes.post('/login', loginController)
userRoutes.delete('/:userId', deleteUserController)



export default userRoutes



