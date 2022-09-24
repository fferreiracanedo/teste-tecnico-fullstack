import { Router } from "express";
import listContactController from "../controllers/contacts/listContacts.controller";
import createContactController from "../controllers/contacts/createContacts.controller";
import verifyAuthToken from "../middleware/verifyAuthToken.middleware";
import updateContactsController from "../controllers/contacts/updateContacts.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";

const contactsRouter = Router()


contactsRouter.get('/', verifyAuthToken, listContactController)
contactsRouter.post('/', createContactController)
contactsRouter.patch('/:contact_id', verifyAuthToken, updateContactsController)
contactsRouter.delete('/:contact_id', verifyAuthToken, deleteContactController)



export default contactsRouter