import loginService from "../../services/sessions/login.service";
import { Request, Response } from 'express'

const loginController = async (req: Request, res: Response) => {

  const data = req.body

  const token = await loginService(data)

  return res.status(200).json({ token })


}

export default loginController