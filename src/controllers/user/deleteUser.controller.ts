import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";


const deleteUserController = async (req: Request, res: Response) => {

  const { userId } = req.params

  await deleteUserService(userId)


  return res.status(204).json({ message: "User Deleted" })


}
export default deleteUserController