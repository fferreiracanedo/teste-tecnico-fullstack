import { prisma } from "../../prisma/script";
import jwt from "jsonwebtoken";
import { Ilogin } from "../../interfaces/userInterface";
import { AppError } from "../../errors/appError";
import { compare } from 'bcrypt'


const loginService = async (data: Ilogin) => {


  const userExists = await prisma.user.findUnique({ where: { email: data.email } })

  if (!userExists) {
    throw new AppError("User don't exists")
  }

  const mathPass = await compare(data.password, userExists.password)


  if (!mathPass) {

    throw new AppError("Password not match", 401)

  }


  const token = jwt.sign({ id: userExists.id }, process.env.SECRET_KEY as string, { expiresIn: "24h" })

  return token
}
export default loginService