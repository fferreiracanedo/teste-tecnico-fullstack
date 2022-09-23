import { prisma } from "../../prisma/script";
import { IuserUpdate } from "../../interfaces/userInterface";
import { AppError } from "../../errors/appError";

const updateUserService = async ({ name, email, password, tel }: IuserUpdate, userId: string) => {


  const userSearch = await prisma.user.findUnique({ where: { id: userId } })

  if (!userSearch) {
    throw new AppError("User not found")
  }

  const data = {
    name: name ? name : userSearch.name,
    email: email ? email : userSearch.email,
    password: password ? password : userSearch.password,
    tel: tel ? tel : userSearch.tel
  }

  const userUpdated = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      tel: true,
    }
  })

  return userUpdated



}
export default updateUserService