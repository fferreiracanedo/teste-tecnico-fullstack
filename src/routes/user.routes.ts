import { Router } from "express";
import userListController from "../controllers/user/userList.controller";
import userCreateController from "../controllers/user/userCreate.controller";
const userRoutes = Router()


userRoutes.get('/', userListController)
userRoutes.post('/', userCreateController)



export default userRoutes



