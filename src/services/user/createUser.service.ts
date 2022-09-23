import { UserRequest } from '../../interfaces/userInterface'
import { prisma } from '../../prisma/script'
import { hash } from 'bcrypt'
const createUserService = async (data: UserRequest) => {


  const hashPass = await hash(data.password, 10)


  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashPass,
      tel: data.tel,
      accountCreated: new Date(),
    }
  })

  return { ...user, hashPass: undefined }

}

export default createUserService

