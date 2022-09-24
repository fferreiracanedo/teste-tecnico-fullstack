import updateContactService
  from "../../services/contacts/updateContact.service";
import { Request, Response } from "express";


const updateContactsController = async (req: Request, res: Response) => {

  const { contact_id } = req.params
  const { name, emails, tel } = req.body


  const contactUpdate = await updateContactService(contact_id, { name, emails, tel })

  return res.status(200).json({ message: "Contact Update", contactUpdate })

}
export default updateContactsController
