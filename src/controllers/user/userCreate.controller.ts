import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const userCreateController = async (req: Request, res: Response) => {

  const { name, email, tel } = req.body


  const user = await createUserService(name, email, tel)

  return res.status(201).json(user)


}


export default userCreateController
