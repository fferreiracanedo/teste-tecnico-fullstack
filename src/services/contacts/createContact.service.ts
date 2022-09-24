import { AppError } from "../../errors/appError";
import { IcontactRequest } from "../../interfaces/contactInterface";
import { prisma } from "../../prisma/script";


const createContactService = async (data: IcontactRequest) => {



  const contactEmail = await prisma.contact.findFirst({ where: { emails: data.emails } })

  if (contactEmail) {
    throw new AppError("Email Already Exists")
  }

  const createContact = await prisma.contact.create({
    data: {
      name: data.name,
      emails: data.emails,
      tel: data.tel,
      ownerId: data.ownerId
    }
  })

  return createContact

}
export default createContactService