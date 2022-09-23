import createContactService from "../../services/contacts/createContact.service";
import { Request, Response } from "express"
const createContactController = async (req: Request, res: Response) => {

  const data = req.body

  const contactCreate = await createContactService(data)

  return res.status(201).json(contactCreate)

}

export default createContactController