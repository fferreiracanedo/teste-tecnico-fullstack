import { UserRequest } from '../../interfaces/userInterface'
import { prisma } from '../../prisma/script'

const createUserService = async (name: string, email: string, tel: string) => {

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      tel: tel,
      account_created: new Date(),
    }
  })

  const contact = await prisma.contact.create({
    data: {
      name : user.name,
      emails : user.email,
      tel : user.tel,
      ownerID : user.id
    }
  })


  return user

}

export default createUserService

