import { prisma } from "../../prisma/script";
import { AppError } from "../../errors/appError";

const deleteContactService = async (contact_id: string) => {

  const searchContact = await prisma.contact.findUnique({ where: { id: contact_id, } })

  if (!searchContact) {
    throw new AppError("Contact not exists")
  }

  if (contact_id != searchContact.id) {
    throw new AppError("You don't have permission", 403)
  }


  await prisma.contact.delete({
    where: {
      id: contact_id
    }
  })

  return true

}
export default deleteContactService