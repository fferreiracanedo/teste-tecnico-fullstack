
import { Request, Response } from "express"
import { prisma } from "../../prisma/script"
const listUserService = async () => {

  const list = await prisma.user.findMany({ select: { id: true, name: true, email: true, tel: true, accountCreated: true, contacts: true, password: false } })

  return list

}

export default listUserService