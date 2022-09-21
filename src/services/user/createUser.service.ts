import { UserRequest } from '../../interfaces/userInterface'
import { prisma } from '../../prisma/script'

const createUserService = async (name: string, email: string, tel: string) => {

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      tel: tel,
      accountCreated: new Date(),
    }
  })

 

  return user

}

export default createUserService

