import { Router } from "express";
import userListController from "../controllers/user/userList.controller";
import userCreateController from "../controllers/user/userCreate.controller";
import verifyEmailMiddleware from "../middleware/verifyEmail.middleware";
import loginController from "../controllers/sessions/login.controller";
import verifyAuthToken from "../middleware/verifyAuthToken.middleware";
import deleteUserController from "../controllers/user/deleteUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import listUserByIdController from "../controllers/user/listUserById.controller";
const userRoutes = Router()


userRoutes.get('/', verifyAuthToken, userListController)
userRoutes.get('/:userId', verifyAuthToken, listUserByIdController)
userRoutes.post('/', verifyEmailMiddleware, userCreateController)
userRoutes.post('/login', loginController)
userRoutes.patch('/:userId', verifyAuthToken, updateUserController)
userRoutes.delete('/:userId', verifyAuthToken, deleteUserController)


export default userRoutes



