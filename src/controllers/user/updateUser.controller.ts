import updateUserService from "../../services/user/updateUser.service";
import { Request, Response } from 'express'

const updateUserController = async (req: Request, res: Response) => {


  const { userId } = req.params
  const { name, email, password, tel } = req.body


  const userUpdated = await updateUserService({ name, email, password, tel, }, userId)

  return res.status(200).json({ message: "User Updated", userUpdated })

}
export default updateUserController