import { prisma } from "../../prisma/script";
import { AppError } from "../../errors/appError";
import { IcontactUpdate } from "../../interfaces/contactInterface";

const updateContactService = async (contact_id: string, { name, emails, tel }: IcontactUpdate) => {



  const findContact = await prisma.contact.findUnique({ where: { id: contact_id } })


  if (!findContact) {
    throw new AppError("Contact not found")
  }

  const data = {
    name: name ? name : findContact.name,
    emails: emails ? emails : findContact.emails,
    tel: tel ? tel : findContact.tel
  }


  const contactUpdated = await prisma.contact.update({
    where: { id: contact_id }, data, select: {
      id: true, name: true, emails: true, tel: true, owner: { select: { id: true, name: true } }
    }
  })

  return contactUpdated

}
export default updateContactService