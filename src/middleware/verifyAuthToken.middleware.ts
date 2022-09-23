import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/appError"


const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {



  const token = req.headers.authorization


  if (!token) {
    throw new AppError("Missing Token", 401)

  }

  const tokenflat = token.split(" ")[1]

  jwt.verify(tokenflat, process.env.SECRET_KEY as string, (error: any, decoded: any) => {
    if (error) {
      throw new AppError("Missing Auth", 401)
    }
    req.user = {
      id: decoded.id,
      email: decoded.email
    }
  })


  next()

}
export default verifyAuthToken