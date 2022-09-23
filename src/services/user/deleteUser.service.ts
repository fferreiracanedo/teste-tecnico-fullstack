import { prisma } from "../../prisma/script";
import { AppError } from "../../errors/appError";

const deleteUserService = async (userId: string) => {


  const verifyUser = await prisma.user.findUnique({
    where: {
      id: userId,
    }
  })
  if (!verifyUser) {
    throw new AppError('User not found')
  }

  if (userId != verifyUser.id) {
    throw new AppError("You don't have permission", 403);
  }


  await prisma.user.delete({
    where: {
      id: userId,
    },
  });


  return true
}
export default deleteUserService