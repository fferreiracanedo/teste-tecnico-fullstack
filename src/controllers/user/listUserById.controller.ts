import listUserByIdService from "../../services/user/listUserById.service";
import { Request, Response } from "express"

const listUserByIdController = async (req: Request, res: Response) => {

  const { userId } = req.params

  const user = await listUserByIdService(userId)

  return res.status(200).json(user)

}
export default listUserByIdController

