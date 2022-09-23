import { prisma } from "../../prisma/script";
import { AppError } from "../../errors/appError";

const listUserByIdService = async (userId: string) => {

  const user = await prisma.user.findUnique({
    where: { id: userId }, select: {
      id: true, name: true
    }
  })

  if (!user) {
    throw new AppError("User not found")
  }



  return user

}
export default listUserByIdService