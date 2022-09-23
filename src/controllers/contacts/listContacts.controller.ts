import listContactsService from "../../services/contacts/listContacts.service";
import { Request, Response } from "express";

const listContactController = async (req: Request, res: Response) => {

  const contactsList = await listContactsService()

  return res.status(200).json(contactsList)
}

export default listContactController
