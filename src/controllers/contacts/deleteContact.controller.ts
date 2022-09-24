import deleteContactService from "../../services/contacts/deleteContact.service";
import { Request, Response } from 'express'

const deleteContactController = async (req: Request, res: Response) => {

  const { contact_id } = req.params


  await deleteContactService(contact_id)

  return res.status(204).json({ message: "Contact Deleted" })

}
export default deleteContactController