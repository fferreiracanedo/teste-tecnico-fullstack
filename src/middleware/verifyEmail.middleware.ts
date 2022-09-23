import { prisma } from "../prisma/script";
import { Request, Response, NextFunction } from "express";


const verifyEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {


  const { email } = req.body

  const duplicateEmail = await prisma.user.findUnique({ where: { email } })

  if (!duplicateEmail) {
    return next()
  }


  return res.status(400).json("Email Already Exists")


}
export default verifyEmailMiddleware