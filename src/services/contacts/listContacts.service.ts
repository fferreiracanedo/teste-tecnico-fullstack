import { prisma } from "../../prisma/script";

const listContactsService = async () => {

  const contactList = await prisma.contact.findMany({
    select: {
      id: true, name: true, emails: true, tel
        : true, owner: true, ownerId: true,
    }
  })

  return contactList

}

export default listContactsService